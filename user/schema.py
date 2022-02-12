import graphene

from graphene_django import DjangoObjectType

from user.schemas.extend_user import AuthQuery, AuthMutation
from user.schemas.hospital import HospitalQuery
from user.schemas.patient import PatientQuery, PatientMutation
from user.schemas.patient_authorized_hospitals import (
    PatientAuthorizedHospitalQuery,
    PatientAuthorizedHospitalMutation,
)


class UserQuery(
    AuthQuery,
    HospitalQuery,
    PatientQuery,
    PatientAuthorizedHospitalQuery,
    graphene.ObjectType,
):
    pass


class UserMutation(
    AuthMutation,
    PatientMutation,
    PatientAuthorizedHospitalMutation,
    graphene.ObjectType,
):
    pass
