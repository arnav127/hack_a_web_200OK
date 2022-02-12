from pydoc import doc
import graphene

from graphene_django import DjangoObjectType
from opd.models import Doctor, DoctorPatientAssigned

class DoctorType(DjangoObjectType):
    class Meta:
        model = Doctor


class DoctorQuery(graphene.ObjectType):
    all_doctors = graphene.List(DoctorType)
    doctor = graphene.Field(DoctorType, id=graphene.String())

    def resolve_all_doctors(root, info):
        return Doctor.objects.all()

    def resolve_doctor(root, info, id):
        return Doctor.objects.get(pk=id)


class DoctorPatientAssignedType(DjangoObjectType):
    class Meta:
        model = DoctorPatientAssigned

class DoctorPatientAssignedQuery(graphene.ObjectType):
    all_doctor_patient_assigned = graphene.List(DoctorPatientAssignedType)
    doctor_patient_assigned = graphene.List(DoctorPatientAssignedType )

    def resolve_all_doctor_patient_assigned(root, info):
        return DoctorPatientAssigned.objects.all()

    def resolve_doctor_patient_assigned(root, info):
        if info.context.user.is_doctor:
            return DoctorPatientAssigned.objects.filter(doctor=info.context.user.doctor)
        return None
