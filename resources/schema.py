from graphene_django import DjangoObjectType

from resources.models import HospitalResource
class HospitalResourceType(DjangoObjectType):
    class Meta:
        model = HospitalResource
        filter_fields = [
            'hospital',
        ]
