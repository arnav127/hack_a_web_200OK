import graphene

from graphene_django import DjangoObjectType
from resources.models import HospitalResource
from opd.models import DoctorPatientAssigned
from user.models import Patient, PatientAuthorizedHospital
from graphql_jwt.decorators import login_required


class PatientType(DjangoObjectType):
    class Meta:
        model = Patient


class PatientQuery(graphene.ObjectType):
    patient = graphene.Field(
        PatientType,
        phone=graphene.String(),
        aadhar=graphene.String(),
        id=graphene.String(),
    )
    patients_all = graphene.List(PatientType)

    def resolve_patient(root, info, **kwargs):
        if kwargs.get("id"):
            return Patient.objects.get(pk=kwargs["id"])

        if kwargs.get("phone"):
            return Patient.objects.get(phone=kwargs["phone"])

        if kwargs.get("aadhar"):
            return Patient.objects.get(aadhar=kwargs["aadhar"])
        return None

    @login_required
    def resolve_patients_all(root, info):
        return Patient.objects.all()


class CreatePatient(graphene.Mutation):

    patient = graphene.Field(PatientType)

    class Arguments:
        name = graphene.String(required=True)
        phone = graphene.String(required=True)
        aadhar = graphene.String(required=True)

    @classmethod
    @login_required
    def mutate(self, root, info, name, phone, aadhar):
        patient = Patient.objects.create(name=name, phone=phone, aadhar=aadhar)
        return CreatePatient(patient=patient)


class UpdatePatient(graphene.Mutation):
    patient = graphene.Field(PatientType)

    class Arguments:
        id = graphene.String(required=True)
        name = graphene.String()
        phone = graphene.String()
        aadhar = graphene.String()

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        patient = Patient.objects.get(pk=id)
        for k, v in kwargs.items():
            setattr(patient, k, v)
        patient.save()
        return UpdatePatient(patient=patient)


class DischargePatient(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        patient = graphene.String()

    @classmethod
    @login_required
    def mutate(self, root, info, patient):
        hospital = info.context.user.hospital
        # 1. Mark last doctor authorized as done
        doctorPatientAssigned = (
            DoctorPatientAssigned.objects.filter(patient=patient)
            .order_by("-assigned_at")
            .first()
        )
        print(doctorPatientAssigned)
        doctorPatientAssigned.status = "DONE"
        doctorPatientAssigned.save()
        # 2. Increase bed capacity by 1
        hospitalResource = HospitalResource.objects.get(hospital=hospital)
        hospitalResource.bed_available += 1
        hospitalResource.save()
        # 3. Remove hospital from authorized hospitals
        PatientAuthorizedHospital.objects.get(
            hospital_id=hospital, patient_id=patient
        ).delete()
        return DischargePatient(ok=True)


class ReferPatient(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        patient = graphene.String()

    @classmethod
    @login_required
    def mutate(self, root, info, patient):
        hospital = info.context.user.hospital
        # 1. Mark last doctor authorized as done
        doctorPatientAssigned = (
            DoctorPatientAssigned.objects.filter(patient=patient)
            .order_by("-assigned_at")
            .first()
        )
        doctorPatientAssigned.status = "REFERRED"
        doctorPatientAssigned.save()
        # 2. Increase bed capacity by 1
        hospitalResource = HospitalResource.objects.get(hospital=hospital)
        hospitalResource.bedAvailability += 1
        hospitalResource.save()
        # 3. Remove hospital from authorized hospitals
        PatientAuthorizedHospital.objects.get(
            hospital_id=hospital, patient_id=patient
        ).delete()
        return ReferPatient(ok=True)


class PatientMutation(graphene.ObjectType):
    create_patient = CreatePatient.Field()
    update_patient = UpdatePatient.Field()
    discharge_patient = DischargePatient.Field()
    refer_patient = ReferPatient.Field()
