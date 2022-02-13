from venv import create
import graphene

from graphene_django import DjangoObjectType
from opd.models import DoctorPatientAssigned
from user.models import Hospital, PatientAuthorizedHospital, ReferredPatients, Patient
from graphql_jwt.decorators import login_required


class ReferredPatientsType(DjangoObjectType):
    class Meta:
        model = ReferredPatients


class ReferredPatientsQuery(graphene.ObjectType):
    referred_in_patients = graphene.List(ReferredPatientsType)
    referred_out_patients = graphene.List(ReferredPatientsType)

    @login_required
    def resolve_referred_in_patients(root, info):
        if not info.context.user.is_hospital:
            return None

        return ReferredPatients.objects.filter(
            hospital_referred=info.context.user.hospital
        )

    @login_required
    def resolve_referred_out_patients(root, info):
        if not info.context.user.is_hospital:
            return None

        return ReferredPatients.objects.filter(
            hospital_referred_by=info.context.user.hospital
        )


class CreateReferredPatient(graphene.Mutation):

    referred_patient = graphene.Field(ReferredPatientsType)
    ok = graphene.Boolean()

    class Arguments:
        patient = graphene.String()
        hospital_referred = graphene.String()
        reason = graphene.String()

    @classmethod
    @login_required
    def mutate(self, root, info, patient, hospital_referred, reason):
        pat = Patient.objects.get(pk=patient)
        hos_r = Hospital.objects.get(pk=hospital_referred)
        referred_patient = ReferredPatients.objects.create(
            patient=pat,
            hospital_referred=hos_r,
            hospital_referred_by=info.context.user.hospital,
            reason_referred=reason,
        )
        PatientAuthorizedHospital.objects.filter(hospital_id=info.context.user.hospital, patient_id=pat).delete()
        PatientAuthorizedHospital.objects.create(hospital_id=info.context.user.hospital, patient_id=pat)
        DoctorPatientAssigned.objects.filter(patient=pat).delete()
        # ideally we will set that the patient is referred now
        # dpa = DoctorPatientAssigned.objects.filter(patient=pat).last()
        # dpa.status = "REFERRED"
        # dpa.save()

        return CreateReferredPatient(referred_patient=referred_patient, ok=True)


class ReferredPatientsMutation(graphene.ObjectType):
    create_referred_patient = CreateReferredPatient.Field()
