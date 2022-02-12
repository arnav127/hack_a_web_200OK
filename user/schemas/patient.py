import graphene

from graphene_django import DjangoObjectType
from user.models import Patient
from graphql_jwt.decorators import login_required


class PatientType(DjangoObjectType):
    class Meta:
        model = Patient


class PatientQuery(graphene.ObjectType):
    patient = graphene.Field(
        PatientType, phone=graphene.String(), aadhar=graphene.String()
    )
    patients_all = graphene.List(PatientType)

    def resolve_patient(root, info, **kwargs):
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


class PatientMutation(graphene.ObjectType):
    create_patient = CreatePatient.Field()
    update_patient = UpdatePatient.Field()
