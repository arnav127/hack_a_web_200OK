import graphene

from opd.schemas.doctor import DoctorQuery, DoctorMutation
from opd.schemas.doctor_patient_assigned import (
    DoctorPatientAssignedQuery,
    DoctorPatientAssignedMutation,
)


class OpdQuery(DoctorQuery, DoctorPatientAssignedQuery, graphene.ObjectType):
    pass


class OpdMutation(DoctorMutation, DoctorPatientAssignedMutation, graphene.ObjectType):
    pass
