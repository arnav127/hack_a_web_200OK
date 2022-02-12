import graphene

from graphene_django import DjangoObjectType
from opd.models import Doctor

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
