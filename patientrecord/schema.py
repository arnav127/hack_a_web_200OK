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


class MedicinePrescriptionQuery(graphene.ObjectType):
    medicine_prescription = graphene.List(MedicinePrescriptionType)

    @login_required
    def resolve_medicine_prescription(root, info):
        return MedicinePrescription.objects.all()


class MedicineRecordQuery(graphene.ObjectType):
    medicine_records = graphene.List(MedicineRecordType, patient=graphene.String())
    latest_medicine_records = graphene.Field(
        MedicineRecordType, patient=graphene.String()
    )

    @login_required
    def resolve_medicine_records(root, info, patient):
        return MedicineRecord.objects.filter(patient=patient)

    @login_required
    def resolve_medicine_records(root, info, patient):
        return MedicineRecord.objects.filter(patient=patient).order_by("-id").first()


class DoctorNotesQuery(graphene.ObjectType):
    doctor_notes = graphene.List(DoctorNotesType, patient=graphene.String())
    latest_doctor_notes = graphene.Field(DoctorNotesType, patient=graphene.String())

    @login_required
    def resolve_doctor_notes(root, info, patient):
        return DoctorNotes.objects.filter(patient=patient)

    @login_required
    def resolve_latest_doctor_notes(root, info, patient):
        return DoctorNotes.objects.filter(patient=patient).order_by("-id").first()


class TestResultQuery(graphene.ObjectType):
    test_result = graphene.List(TestResultType, patient=graphene.String())

    @login_required
    def resolve_test_result(root, info, patient):
        return TestResult.objects.filter(patient=patient)


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


class CreateMedicineRecord(graphene.Mutation):
    class Arguments:
        patient_id = graphene.String()
        prescription_id = graphene.String()

    medicine_record = graphene.Field(MedicineRecordType)

    @classmethod
    @login_required
    def mutate(self, root, info, medicine, doses):
        medr = MedicineRecord.objects.create(medicine=medicine, doses=doses)
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


class CreateDoctorNotes(graphene.Mutation):
    class Arguments:
        patient_id = graphene.String()
        doctor = graphene.String()
        diagnosis = graphene.String()
        notes = graphene.String()

    doctor_notes = graphene.Field(DoctorNotesType)

    @classmethod
    @login_required
    def mutate(self, root, info, patient_id, doctor, diagnosis, notes):
        doctor_notes = DoctorNotes.objects.create(
            patient_id=patient_id, doctor=doctor, diagnosis=diagnosis, notes=notes
        )
        return CreateDoctorNotes(doctor_notes=doctor_notes)


class UpdateDoctorNotes(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)
        patient_id = graphene.String()
        doctor = graphene.String()
        diagnosis = graphene.String()
        notes = graphene.String()

    doctor_notes = graphene.Field(DoctorNotesType)

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        doctor_notes = DoctorNotes.objects.get(pk=id)
        for k, v in kwargs.items():
            setattr(doctor_notes, k, v)
        doctor_notes.save()
        return UpdateDoctorNotes(doctor_notes=doctor_notes)


class DoctorNotesMutation(graphene.ObjectType):
    create_doctor_notes = CreateDoctorNotes.Field()
    update_doctor_notes = UpdateDoctorNotes.Field()


class CreateTestResult(graphene.Mutation):
    class Arguments:
        patient = graphene.String()
        test_name = graphene.String()
        test_result = graphene.String()

    test_result = graphene.Field(TestResultType)

    @classmethod
    @login_required
    def mutate(self, root, info, patient, test_name, test_result):
        test_result = TestResult.objects.create(
            patient=patient, test_name=test_name, test_result=test_result
        )
        return CreateTestResult(test_result=test_result)


class UpdateTestResult(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)
        patient = graphene.String()
        test_name = graphene.String()
        test_result = graphene.String()

    test_result = graphene.Field(TestResultType)

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        test_result = TestResult.objects.get(pk=id)
        for k, v in kwargs.items():
            setattr(test_result, k, v)
        test_result.save()
        return UpdateTestResult(test_result=test_result)


class TestResultMutation(graphene.ObjectType):
    create_test_result = CreateTestResult.Field()
    update_test_result = UpdateTestResult.Field()
