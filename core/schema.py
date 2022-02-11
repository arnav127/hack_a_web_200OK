import graphene
from user.schema import AuthMutation, AuthQuery, HospitalQuery, PatientQuery

class Query(
    PatientQuery,
    HospitalQuery,
    AuthQuery, 
    graphene.ObjectType,
    ):
    pass

class Mutation(
    AuthMutation, 
    graphene.ObjectType,
    ):
   pass


schema = graphene.Schema(query=Query, mutation=Mutation)

