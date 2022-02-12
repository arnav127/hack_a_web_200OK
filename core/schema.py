import graphene
from user.schema import UserQuery, UserMutation
from patientrecord.schema import PatientRecordQuery, PatientRecordMutation

from resources.schema import HospitalResourceQuery
from resources.schema import HospitalResourceMutation

from opd.schema import DoctorQuery, DoctorPatientAssignedQuery
from opd.schema import DoctorMutation, DoctorPatientAssignedMutation


class Query(
    DoctorQuery,
    DoctorPatientAssignedQuery,
    HospitalResourceQuery,
    UserQuery,
    graphene.ObjectType,
):
    pass


class Mutation(
    DoctorMutation,
    DoctorPatientAssignedMutation,
    HospitalResourceMutation,
    UserMutation,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
