import graphene
from graphene_django import DjangoObjectType

from resources.models import HospitalResource
from graphql_jwt.decorators import login_required

class HospitalResourceType(DjangoObjectType):
    class Meta:
        model = HospitalResource
        filter_fields = [
            'hospital',
        ]


class HospitalResourceQuery(graphene.ObjectType):
    all_hospital_resources = graphene.List(HospitalResourceType)
    hospital_resource = graphene.Field(HospitalResourceType, id=graphene.Int())
    current_hospital_resource = graphene.Field(HospitalResourceType)

    @login_required
    def resolve_all_hospital_resources(self, info, **kwargs):
        return HospitalResource.objects.all()

    @login_required
    def resolve_hospital_resource(self, info, id):
        return HospitalResource.objects.get(pk=id)

    @login_required
    def resolve_current_hospital_resource(self, info, **kwargs):
        return HospitalResource.objects.get(hospital=info.context.user.hospital)