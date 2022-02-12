import graphene

from graphene_django import DjangoObjectType
from user.models import Hospital


class HospitalType(DjangoObjectType):
    class Meta:
        model = Hospital


class HospitalQuery(graphene.ObjectType):
    all_hospitals = graphene.List(HospitalType)
    hospital = graphene.Field(HospitalType, name=graphene.String())

    def resolve_all_hospitals(root, info):
        return Hospital.objects.all()

    def resolve_hospital(root, info, name):
        return Hospital.objects.get(name=name)
