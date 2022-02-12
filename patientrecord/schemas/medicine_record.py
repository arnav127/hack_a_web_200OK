import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from patientrecord.models import MedicineRecord


class MedicineRecordType(DjangoObjectType):
    class Meta:
        model = MedicineRecord


class MedicineRecordQuery(graphene.ObjectType):
    medicine_records = graphene.List(MedicineRecordType, patient=graphene.String())
    latest_medicine_records = graphene.Field(
        MedicineRecordType, patient=graphene.String()
    )

    @login_required
    def resolve_medicine_records(root, info, patient):
        return MedicineRecord.objects.filter(patient=patient).order_by("-id")

    @login_required
    def resolve_latest_medicine_records(root, info, patient):
        return MedicineRecord.objects.filter(patient=patient).order_by("-id").first()


class CreateMedicineRecord(graphene.Mutation):
    class Arguments:
        patient_id = graphene.String()
        prescriptions = graphene.String()

    medicine_record = graphene.Field(MedicineRecordType)

    @classmethod
    @login_required
    def mutate(self, root, info, patient_id, prescriptions):
        medr = MedicineRecord.objects.create(
            patient_id=patient_id, prescriptions=prescriptions
        )
        return CreateMedicineRecord(medicine_record=medr)


class UpdateMedicineRecord(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)
        patient_id = graphene.String()
        prescription_id = graphene.String()

    medicine_record = graphene.Field(MedicineRecordType)

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        medr = MedicineRecord.objects.get(pk=id)
        for k, v in kwargs.items():
            setattr(medr, k, v)
        medr.save()
        return UpdateMedicineRecord(medicine_record=medr)


class MedicineRecordMutation(graphene.ObjectType):
    create_medicine_record = CreateMedicineRecord.Field()
    update_medicine_record = UpdateMedicineRecord.Field()
