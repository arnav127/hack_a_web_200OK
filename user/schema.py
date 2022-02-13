import graphene

from graphene_django import DjangoObjectType

from user.schemas.extend_user import AuthQuery, AuthMutation
from user.schemas.hospital import HospitalQuery
from user.schemas.patient import PatientQuery, PatientMutation
from user.schemas.patient_authorized_hospitals import (
    PatientAuthorizedHospitalQuery,
    PatientAuthorizedHospitalMutation,
)
from user.schemas.referred_patients import (
    ReferredPatientsQuery,
    ReferredPatientsMutation,
)


class UserQuery(
    AuthQuery,
    HospitalQuery,
    PatientQuery,
    PatientAuthorizedHospitalQuery,
    ReferredPatientsQuery,
    graphene.ObjectType,
):
    pass


class UserMutation(
    AuthMutation,
    PatientMutation,
    PatientAuthorizedHospitalMutation,
    ReferredPatientsMutation,
    graphene.ObjectType,
):
    pass
