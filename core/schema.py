import graphene
from user.schema import AuthMutation, AuthQuery, HospitalQuery, PatientQuery, PatientMutation, PatientAuthorizedHospitalQuery, PatientAuthorizedHospitalMutation


from resources.schema import HospitalResourceQuery
from resources.schema import HospitalResourceMutation
class Query(
    HospitalResourceQuery,
    PatientQuery,
    PatientAuthorizedHospitalQuery,
    HospitalQuery,
    AuthQuery, 
    graphene.ObjectType,
    ):
    pass

class Mutation(
    HospitalResourceMutation,
    PatientMutation,
    PatientAuthorizedHospitalMutation,
    AuthMutation, 
    graphene.ObjectType,
    ):
   pass


schema = graphene.Schema(query=Query, mutation=Mutation)

