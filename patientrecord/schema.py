from turtle import update
import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required

from user.models import Patient
from .models import MedicinePrescription, MedicineRecord, DoctorNotes, TestResult

class MedicinePrescriptionType(DjangoObjectType):
    class Meta:
        model = MedicinePrescription

class MedicineRecordType(DjangoObjectType):
    class Meta:
        model = MedicineRecord

class DoctorNotesType(DjangoObjectType):
    class Meta:
        model = DoctorNotes

class TestResultType(DjangoObjectType):
    class Meta:
        model = TestResult

class MedicinePrescriptionQuery(models.Model):
    medicine_prescription = graphene.List(MedicinePrescriptionType)

    @login_required
    def resolve_medicine_prescription(root, info):
        return MedicinePrescription.objects.all()

class MedicineRecordQuery(graphene.ObjectType):
    medicine_records = graphene.List(MedicineRecordType, patient = graphene.String())
    latest_medicine_records = graphene.Field(MedicinePrescriptionType, patient = graphene.String())

    @login_required
    def resolve_medicine_records(root, info, patient):
        return MedicineRecord.objects.filter(patient = patient)

    @login_required
    def resolve_medicine_records(root, info, patient):
        return MedicineRecord.objects.filter(patient = patient).order_by("-id").first()

class DoctorNotesQuery(graphene.ObjectType):
    doctor_notes = graphene.List(DoctorNotesType, patient = graphene.String())
    latest_doctor_notes = graphene.Field(DoctorNotesType, patient = graphene.String())

    @login_required
    def resolve_doctor_notes(root, info, patient):
        return DoctorNotes.objects.filter(patient = patient)

    @login_required
    def resolve_latest_doctor_notes(root, info, patient):
        return DoctorNotes.objects.filter(patient = patient).order_by("-id").first()

    

class TestResultQuery(graphene.ObjectType):
    test_result = graphene.List(TestResultType, patient= graphene.String())

    @login_required
    def resolve_test_result(root, info, patient):
        return TestResult.objects.filter(patient = patient)

class CreateMedicinePrescription(graphene.Mutation):
    class Arguments:
        medicine = graphene.String()
        doses = graphene.String()

    medp = graphene.Field(MedicinePrescriptionType)

    @classmethod
    @login_required
    def mutate(self, root, info, medicine, doses):
        return MedicinePrescription.objects.create(medicine=medicine, doses=doses)

class UpdateMedicinePrescription(graphene.Mutation):
    class Arguments:
        id = graphene.String(required = True)
        medicine = graphene.String()
        doses = graphene.String()

    medp = graphene.Field(MedicinePrescriptionType)

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        medp = MedicinePrescription.objects.get(pk = id)
        for k, v in kwargs.items():
            setattr(medp, k, v)
        medp.save()
        return UpdateMedicinePrescription(medp=medp)

class MedicinePrescriptionMutation(graphene.ObjectType):
    create_medicine_prescription = CreateMedicinePrescription.Field()
    update_medicine_prescription = UpdateMedicinePrescription.Field()