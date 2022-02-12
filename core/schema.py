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

from opd.schema import DoctorQuery


class Query(
    DoctorQuery,
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
    HospitalResourceMutation,
    PatientMutation,
    PatientAuthorizedHospitalMutation,
    PatientRecordMutation,
    AuthMutation,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
