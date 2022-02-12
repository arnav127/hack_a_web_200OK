import graphene

from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from opd.models import Doctor
from user.models import ExtendUser


class DoctorType(DjangoObjectType):
    class Meta:
        model = Doctor


class DoctorQuery(graphene.ObjectType):
    all_doctors = graphene.List(DoctorType)
    doctor = graphene.Field(DoctorType, id=graphene.String())

    def resolve_all_doctors(root, info):
        return Doctor.objects.all()

    def resolve_doctor(root, info, id):
        return Doctor.objects.get(pk=id)


class CreateDoctor(graphene.Mutation):
    doctor = graphene.Field(DoctorType)
    ok = graphene.Boolean()

    class Arguments:
        username = graphene.String()
        name = graphene.String()
        specialization = graphene.String()

    @classmethod
    @login_required
    def mutate(cls, root, info, username, name, specialization):
        if not info.context.user.is_hospital:
            return CreateDoctor(ok=False, doctor=None)

        user = ExtendUser.objects.get(username=username)
        doctor = Doctor.objects.create(
            user=user,
            name=name,
            hospital=info.context.user.hospital,
            specialization=specialization,
        )
        return CreateDoctor(ok=True, doctor=doctor)


class DoctorMutation(graphene.ObjectType):
    create_doctor = CreateDoctor.Field()
