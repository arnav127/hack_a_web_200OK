import graphene

from graphene_django import DjangoObjectType
from graphql_auth.schema import UserQuery, MeQuery
from graphql_auth import mutations
from .models import ExtendUser, Hospital, Patient
from graphql_jwt.decorators import login_required

class UserType(DjangoObjectType):
    class Meta:
        model = ExtendUser

class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    password_reset = mutations.PasswordReset.Field()
    password_change = mutations.PasswordChange.Field()
    archive_account = mutations.ArchiveAccount.Field()
    delete_account = mutations.DeleteAccount.Field()
    update_account = mutations.UpdateAccount.Field()
    send_secondary_email_activation = mutations.SendSecondaryEmailActivation.Field()
    verify_secondary_email = mutations.VerifySecondaryEmail.Field()
    swap_emails = mutations.SwapEmails.Field()

    # django-graphql-jwt inheritances
    token_auth = mutations.ObtainJSONWebToken.Field()
    verify_token = mutations.VerifyToken.Field()
    refresh_token = mutations.RefreshToken.Field()
    revoke_token = mutations.RevokeToken.Field()

class AuthQuery(UserQuery, MeQuery, graphene.ObjectType):
    pass


class HospitalType(DjangoObjectType):
    class Meta:
        model = Hospital

class HospitalQuery(graphene.ObjectType):
    all_hospitals = graphene.List(HospitalType)
    hospital = graphene.Field(HospitalType, name=graphene.String())
    def resolve_all_hospitals(root, info):
        return Hospital.objects.all()

    def resolve_hospital(root, info, name):
        return Hospital.objects.filter(name=name)

class PatientType(DjangoObjectType):
    class Meta:
        model = Patient

class PatientQuery(graphene.ObjectType):
    patient = graphene.Field(PatientType, phone=graphene.String(), aadhar=graphene.String())

    @login_required
    def resolve_patient(root, info, phone, aadhar):
        return Patient.objects.filter(phone = phone, aadhar=aadhar).first()

class CreatePatient (graphene.Mutation):
    
    patient = graphene.Field(PatientType)
    class Arguments:
        name = graphene.String(required=True)
        phone = graphene.String(required=True)
        aadhar = graphene.String(required=True)

    @classmethod
    @login_required
    def mutate(self, root, info, name, phone, aadhar):
        patient = Patient.objects.create(name=name, phone=phone, aadhar=aadhar)
        return CreatePatient(patient=patient)

class UpdatePatient(graphene.Mutation):
    patient = graphene.Field(PatientType)

    class Arguments:
        id = graphene.String(required=True)
        name = graphene.String()
        phone = graphene.String()
        aadhar = graphene.String()
        
    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        patient = Patient.objects.get(pk = id)
        for k, v in kwargs.items():
            setattr(patient, k, v)
        patient.save()
        return UpdatePatient(patient=patient)

class PatientMutation(graphene.ObjectType):
    create_patient = CreatePatient.Field()
    update_patient = UpdatePatient.Field()
