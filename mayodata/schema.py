import graphene

from graphene_django import DjangoObjectType

from mayodata.models import DiseaseInfo


class DiseaseInfoType(DjangoObjectType):
    class Meta:
        model = DiseaseInfo


class DiseaseInfoQuery(graphene.ObjectType):

    disease_info = graphene.List(DiseaseInfoType, name=graphene.String())

    def resolve_disease_info(self, info, name):
        """
        If you want to get info of multiple diseases at once, you can send
        multiple values separated by comma. 
        For eg: for `malaria` and `cold` you can make the query like
        ```
    query cs{
        diseaseCommaInfo(name: "cold, malaria"){
            id
            name
            link
        }
        }
    ```
        """
        diseases = name.split(",")
        diseases = [disease.strip() for disease in diseases]
        print("diseases = ",diseases)
        dis = []
        for disease in diseases:
            dis.extend(DiseaseInfo.objects.filter(name__icontains=disease))
        return dis
