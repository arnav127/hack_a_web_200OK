import graphene

from graphene_django import DjangoObjectType
from resources.models import HospitalResource
from user.models import Hospital, Patient, PatientAuthorizedHospital
from graphql_jwt.decorators import login_required


class PatientAuthorizedHospitalType(DjangoObjectType):
    class Meta:
        model = PatientAuthorizedHospital


class PatientAuthorizedHospitalQuery(graphene.ObjectType):
    patients_admitted = graphene.List(PatientAuthorizedHospitalType)

    def resolve_patients_admitted(root, info):
        hospital_id = Hospital.objects.get(user=info.context.user)
        return PatientAuthorizedHospital.objects.filter(hospital_id=hospital_id)


class CreatePatientAuthorizedHospital(graphene.Mutation):
    class Arguments:
        patient_id = graphene.String()

    ok = graphene.Boolean()
    patient_authorized_hospital = graphene.Field(PatientAuthorizedHospitalType)

    @classmethod
    @login_required
    def mutate(self, root, info, patient_id):
        hospital = info.context.user.hospital
        hospitalResource = HospitalResource.objects.get(hospital=hospital)
        hospitalResource.bed_available -= 1

        patient = Patient.objects.get(pk=patient_id)
        pah = PatientAuthorizedHospital.objects.create(
            patient_id=patient, hospital_id=hospital
        )
        return CreatePatientAuthorizedHospital(ok=True, patient_authorized_hospital=pah)


class DeletePatientAuthorizedHospital(graphene.Mutation):
    class Arguments:
        patient_id = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    @login_required
    def mutate(self, root, info, patient_id):
        hospital = Hospital.objects.filter(user=info.context.user).first()
        print(hospital, "\n\n\n\n\n")
        patient = Patient.objects.get(pk=patient_id)
        PatientAuthorizedHospital.objects.get(
            patient_id=patient, hospital_id=hospital
        ).delete()
        return DeletePatientAuthorizedHospital(ok=True)


class PatientAuthorizedHospitalMutation(graphene.ObjectType):
    create_patient_authorized_hospital = CreatePatientAuthorizedHospital.Field()
    delete_patient_authorized_hospital = DeletePatientAuthorizedHospital.Field()
