import graphene
from user.schema import AuthMutation, AuthQuery

class Query(
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

