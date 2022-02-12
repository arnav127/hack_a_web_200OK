
import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from patientrecord.models import DoctorNotes


class DoctorNotesType(DjangoObjectType):
    class Meta:
        model = DoctorNotes


class DoctorNotesQuery(graphene.ObjectType):
    doctor_notes = graphene.List(DoctorNotesType, patient=graphene.String())
    latest_doctor_notes = graphene.Field(DoctorNotesType, patient=graphene.String())

    @login_required
    def resolve_doctor_notes(root, info, patient):
        return DoctorNotes.objects.filter(patient=patient)

    @login_required
    def resolve_latest_doctor_notes(root, info, patient):
        return DoctorNotes.objects.filter(patient=patient).order_by("-id").first()


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

