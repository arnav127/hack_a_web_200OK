import graphene

from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from opd.models import Doctor, DoctorPatientAssigned
from user.models import Patient, PatientAuthorizedHospital


class DoctorPatientAssignedType(DjangoObjectType):
    class Meta:
        model = DoctorPatientAssigned


class DoctorPatientAssignedQuery(graphene.ObjectType):
    all_doctor_patient_assigned = graphene.List(DoctorPatientAssignedType)
    doctor_patient_assigned = graphene.List(DoctorPatientAssignedType)

    def resolve_all_doctor_patient_assigned(root, info):
        return DoctorPatientAssigned.objects.all()

    def resolve_doctor_patient_assigned(root, info):
        if info.context.user.is_doctor:
            return DoctorPatientAssigned.objects.filter(doctor=info.context.user.doctor)
        return None


class CreateDoctorPatientAssigned(graphene.Mutation):
    doctor_patient_assigned = graphene.Field(DoctorPatientAssignedType)
    ok = graphene.Boolean()

    class Arguments:
        doctor_id = graphene.String(required=True)
        patient_id = graphene.String(required=True)
        status = graphene.String()

    @classmethod
    @login_required
    def mutate(cls, root, info, doctor_id, patient_id, **kwargs):
        if not info.context.user.is_hospital:
            return CreateDoctorPatientAssigned(ok=False, doctor_patient_assigned=None)

        # check if the hospital is authorized to assign the patient to the doctor
        authorized_hospital_list = PatientAuthorizedHospital.objects.filter(
            patient_id=patient_id, hospital_id=info.context.user.hospital
        ).first()
        if not authorized_hospital_list:
            return CreateDoctorPatientAssigned(ok=False, doctor_patient_assigned=None)

        doctor = Doctor.objects.get(pk=doctor_id)
        patient = Patient.objects.get(pk=patient_id)
        doctor_patient_assigned = DoctorPatientAssigned(doctor=doctor, patient=patient)

        for (key, value) in kwargs.items():
            setattr(doctor_patient_assigned, key, value)
        doctor_patient_assigned.save()

        return CreateDoctorPatientAssigned(
            ok=True, doctor_patient_assigned=doctor_patient_assigned
        )


class ChangeDoctorPatientAssignedStatus(graphene.Mutation):
    ok = graphene.Boolean()
    doctor_patient_assigned = graphene.Field(DoctorPatientAssignedType)

    class Arguments:
        patient_id = graphene.String(required=True)
        doctor_id = graphene.String(required=True)
        new_status = graphene.String(required=True)

    @classmethod
    @login_required
    def mutate(cls, root, info, patient_id, doctor_id, new_status):
        if not info.context.user.is_hospital:
            return ChangeDoctorPatientAssignedStatus(
                ok=False, doctor_patient_assigned=None
            )

        # check if the hospital is authorized to assign the patient to the doctor
        authorized_hospital_list = PatientAuthorizedHospital.objects.filter(
            patient_id=patient_id, hospital_id=info.context.user.hospital
        ).first()
        if not authorized_hospital_list:
            return ChangeDoctorPatientAssignedStatus(
                ok=False, doctor_patient_assigned=None
            )

        doctor_patient_assigned = DoctorPatientAssigned.objects.filter(
            doctor_id=doctor_id, patient_id=patient_id
        ).last()
        if not doctor_patient_assigned:
            return ChangeDoctorPatientAssignedStatus(
                ok=False, doctor_patient_assigned=None
            )

        # change the status to new status
        doctor_patient_assigned.status = new_status
        doctor_patient_assigned.save()

        return ChangeDoctorPatientAssignedStatus(
            ok=True, doctor_patient_assigned=doctor_patient_assigned
        )


class UpdateDoctorPatientAssigned(graphene.Mutation):
    ok = graphene.Boolean()
    doctor_patient_assigned = graphene.Field(DoctorPatientAssignedType)

    class Arguments:
        id = graphene.String(required=True)
        new_status = graphene.String(required=True)

    @classmethod
    @login_required
    def mutate(cls, root, info, id, new_status):
        if not info.context.user.is_hospital:
            return UpdateDoctorPatientAssigned(ok=False, doctor_patient_assigned=None)

        doctor_patient_assigned = DoctorPatientAssigned.objects.get(pk=id)
        if not doctor_patient_assigned:
            return UpdateDoctorPatientAssigned(ok=False, doctor_patient_assigned=None)

        # check if the hospital is authorized to assign the patient to the doctor
        authorized_hospital_list = PatientAuthorizedHospital.objects.get(
            patient_id=doctor_patient_assigned.patient,
            hospital_id=info.context.user.hospital,
        )

        if not authorized_hospital_list:
            return UpdateDoctorPatientAssigned(ok=False, doctor_patient_assigned=None)

        # change the status to new status
        doctor_patient_assigned.status = new_status
        doctor_patient_assigned.save()

        return UpdateDoctorPatientAssigned(
            ok=True, doctor_patient_assigned=doctor_patient_assigned
        )


class DoctorPatientAssignedMutation(graphene.ObjectType):
    create_doctor_patient_assigned = CreateDoctorPatientAssigned.Field()
    change_doctor_patient_assigned_status = ChangeDoctorPatientAssignedStatus.Field()
    update_doctor_patient_assigned = UpdateDoctorPatientAssigned.Field()
