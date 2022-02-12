from django.contrib import admin
from .models import (
    ExtendUser,
    Hospital,
    Patient,
    PatientAuthorizedHospital,
    ReferredPatients,
)
from django.apps import apps


admin.site.register(ExtendUser)
admin.site.register(Patient)
admin.site.register(Hospital)
admin.site.register(PatientAuthorizedHospital)
admin.site.register(ReferredPatients)

app = apps.get_app_config("graphql_auth")

for model_name, model in app.models.items():
    admin.site.register(model)
