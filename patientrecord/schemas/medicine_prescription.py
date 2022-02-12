import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from patientrecord.models import MedicinePrescription


class MedicinePrescriptionType(DjangoObjectType):
    class Meta:
        model = MedicinePrescription


class MedicinePrescriptionQuery(graphene.ObjectType):
    medicine_prescription = graphene.List(MedicinePrescriptionType)

    @login_required
    def resolve_medicine_prescription(root, info):
        return MedicinePrescription.objects.all()


class CreateMedicinePrescription(graphene.Mutation):
    class Arguments:
        medicine = graphene.String()
        doses = graphene.String()

    medicine_prescription = graphene.Field(MedicinePrescriptionType)

    @classmethod
    @login_required
    def mutate(self, root, info, medicine, doses):
        medp = MedicinePrescription.objects.create(medicine=medicine, doses=doses)
        return CreateMedicinePrescription(medicine_prescription=medp)


class UpdateMedicinePrescription(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)
        medicine = graphene.String()
        doses = graphene.String()

    medicine_prescription = graphene.Field(MedicinePrescriptionType)

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        medp = MedicinePrescription.objects.get(pk=id)
        for k, v in kwargs.items():
            setattr(medp, k, v)
        medp.save()
        return UpdateMedicinePrescription(medicine_prescription=medp)


class MedicinePrescriptionMutation(graphene.ObjectType):
    create_medicine_prescription = CreateMedicinePrescription.Field()
    update_medicine_prescription = UpdateMedicinePrescription.Field()
