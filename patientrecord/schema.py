import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required

from patientrecord.schemas.medicine_prescription import (
    MedicinePrescriptionQuery,
    MedicinePrescriptionMutation,
)
from patientrecord.schemas.medicine_record import (
    MedicineRecordQuery,
    MedicineRecordMutation,
)
from patientrecord.schemas.doctor_notes import DoctorNotesQuery, DoctorNotesMutation
from patientrecord.schemas.test_result import TestResultQuery, TestResultMutation


class PatientRecordQuery(
    MedicinePrescriptionQuery,
    MedicineRecordQuery,
    DoctorNotesQuery,
    TestResultQuery,
    graphene.ObjectType,
):
    pass


class PatientRecordMutation(
    MedicinePrescriptionMutation,
    MedicineRecordMutation,
    DoctorNotesMutation,
    TestResultMutation,
    graphene.ObjectType,
):
    pass
