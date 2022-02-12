import graphene
from user.schema import (
    AuthMutation,
    AuthQuery,
    HospitalQuery,
    PatientQuery,
    PatientMutation,
    PatientAuthorizedHospitalQuery,
    PatientAuthorizedHospitalMutation,
)
from patientrecord.schema import PatientRecordQuery, PatientRecordMutation

from resources.schema import HospitalResourceQuery
from resources.schema import HospitalResourceMutation

from opd.schema import DoctorQuery, DoctorPatientAssignedQuery
from opd.schema import DoctorMutation, DoctorPatientAssignedMutation


class Query(
    DoctorQuery,
    DoctorPatientAssignedQuery,
    HospitalResourceQuery,
    PatientQuery,
    PatientAuthorizedHospitalQuery,
    HospitalQuery,
    PatientRecordQuery,
    AuthQuery,
    graphene.ObjectType,
):
    pass


class Mutation(
    DoctorMutation,
    DoctorPatientAssignedMutation,
    HospitalResourceMutation,
    PatientMutation,
    PatientAuthorizedHospitalMutation,
    PatientRecordMutation,
    AuthMutation,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
