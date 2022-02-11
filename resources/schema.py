import graphene
from graphene_django import DjangoObjectType

from resources.models import HospitalResource
from graphql_jwt.decorators import login_required


class HospitalResourceType(DjangoObjectType):
    class Meta:
        model = HospitalResource
        filter_fields = [
            "hospital",
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


class CreateHospitalResource(graphene.Mutation):
    ok = graphene.Boolean()
    hospital_resource = graphene.Field(HospitalResourceType)

    class Arguments:
        bed_capacity = graphene.Int()
        bed_available = graphene.Int()
        ventilator_capacity = graphene.Int()
        ventilator_available = graphene.Int()
        icu_capacity = graphene.Int()
        icu_available = graphene.Int()

        blood_test = graphene.Boolean()
        urine_test = graphene.Boolean()

        xray = graphene.Boolean()
        ultrasound = graphene.Boolean()
        mri = graphene.Boolean()
        ekg = graphene.Boolean()
        ecg = graphene.Boolean()
        eeg = graphene.Boolean()
        catscan = graphene.Boolean()

        mammogram = graphene.Boolean()
        colonoscopy = graphene.Boolean()

    @classmethod
    @login_required
    def mutate(cls, root, info, **kwargs):
        HospitalResource.objects.get
        hospital_resource, _ = HospitalResource.objects.get_or_create(
            hospital=info.context.user.hospital, defaults={**kwargs}
        )
        return CreateHospitalResource(ok=True, hospital_resource=hospital_resource)


class UpdateHospitalResource(graphene.Mutation):
    ok = graphene.Boolean()
    hospital_resource = graphene.Field(HospitalResourceType)

    class Arguments:
        id = graphene.Int()
        bed_capacity = graphene.Int()
        bed_available = graphene.Int()
        ventilator_capacity = graphene.Int()
        ventilator_available = graphene.Int()
        icu_capacity = graphene.Int()
        icu_available = graphene.Int()

        blood_test = graphene.Boolean()
        urine_test = graphene.Boolean()

        xray = graphene.Boolean()
        ultrasound = graphene.Boolean()
        mri = graphene.Boolean()
        ekg = graphene.Boolean()
        ecg = graphene.Boolean()
        eeg = graphene.Boolean()
        catscan = graphene.Boolean()

        mammogram = graphene.Boolean()
        colonoscopy = graphene.Boolean()

    @classmethod
    @login_required
    def mutate(cls, root, info, **kwargs):
        hospital_resource = HospitalResource.objects.get(
            hospital=info.context.user.hospital
        )
        for key, value in kwargs.items():
            setattr(hospital_resource, key, value)

        hospital_resource.save()
        return UpdateHospitalResource(ok=True, hospital_resource=hospital_resource)


class HospitalResourceMutation(graphene.ObjectType):
    create_hospital_resource = CreateHospitalResource.Field()
    update_hospital_resource = UpdateHospitalResource.Field()
