import graphene
from user.schema import AuthMutation, AuthQuery, HospitalQuery, PatientQuery, PatientMutation

class Query(
    PatientQuery,
    HospitalQuery,
    AuthQuery, 
    graphene.ObjectType,
    ):
    pass

class Mutation(
    PatientMutation,
    AuthMutation, 
    graphene.ObjectType,
    ):
   pass


schema = graphene.Schema(query=Query, mutation=Mutation)

