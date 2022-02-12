import graphene
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from patientrecord.models import TestResult


class TestResultType(DjangoObjectType):
    class Meta:
        model = TestResult


class TestResultQuery(graphene.ObjectType):
    test_result = graphene.List(TestResultType, patient=graphene.String())

    @login_required
    def resolve_test_result(root, info, patient):
        return TestResult.objects.filter(patient=patient)


class CreateTestResult(graphene.Mutation):
    class Arguments:
        patient = graphene.String()
        test_name = graphene.String()
        test_result = graphene.String()

    test_result = graphene.Field(TestResultType)

    @classmethod
    @login_required
    def mutate(self, root, info, patient, test_name, test_result):
        test_result = TestResult.objects.create(
            patient=patient, test_name=test_name, test_result=test_result
        )
        return CreateTestResult(test_result=test_result)


class UpdateTestResult(graphene.Mutation):
    class Arguments:
        id = graphene.String(required=True)
        patient = graphene.String()
        test_name = graphene.String()
        test_result = graphene.String()

    test_result = graphene.Field(TestResultType)

    @classmethod
    @login_required
    def mutate(self, root, info, id, **kwargs):
        test_result = TestResult.objects.get(pk=id)
        for k, v in kwargs.items():
            setattr(test_result, k, v)
        test_result.save()
        return UpdateTestResult(test_result=test_result)


class TestResultMutation(graphene.ObjectType):
    create_test_result = CreateTestResult.Field()
    update_test_result = UpdateTestResult.Field()
