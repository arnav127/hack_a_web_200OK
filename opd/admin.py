from django.contrib import admin

from opd.models import Doctor, DoctorPatientAssigned

# Register your models here.

admin.site.register(Doctor)
admin.site.register(DoctorPatientAssigned)