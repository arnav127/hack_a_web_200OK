from django.contrib import admin

from patientrecord.models import MedicinePrescription, MedicineRecord

# Register your models here.

admin.site.register(MedicineRecord)
admin.site.register(MedicinePrescription)
