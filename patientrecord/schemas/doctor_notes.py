import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from mlai.predict_disease import predict_disease
from opd.models import Doctor
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
    def mutate(self, root, info, patient_id, doctor, **kwargs):
        pred_dis = ""
        if len(notes)>0:
            symptoms = notes.split(",")
            symptoms = [symptom.strip() for symptom in symptoms]
            pred_dis = predict_disease(symptoms)

        diagnosis = kwargs.get("diagnosis", "")
        notes = kwargs.get("notes", "")

        doctor_get = Doctor.objects.get(id=doctor)
        doctor_notes = DoctorNotes.objects.create(
            patient_id=patient_id, doctor=doctor_get, diagnosis=diagnosis, notes=notes, predicted_disease=pred_dis
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

        if len(doctor_notes.notes)>0:
            symptoms = doctor_notes.notes.split(",")
            symptoms = [symptom.strip() for symptom in symptoms]
            pred_dis = predict_disease(symptoms)
            doctor_notes.predicted_disease = pred_dis

        doctor_notes.save()
        return UpdateDoctorNotes(doctor_notes=doctor_notes)


class DoctorNotesMutation(graphene.ObjectType):
    create_doctor_notes = CreateDoctorNotes.Field()
    update_doctor_notes = UpdateDoctorNotes.Field()
