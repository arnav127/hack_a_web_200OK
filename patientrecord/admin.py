from django.contrib import admin

from patientrecord.models import DoctorNotes, MedicinePrescription, MedicineRecord, TestResult

# Register your models here.

admin.site.register(MedicineRecord)
admin.site.register(MedicinePrescription)
admin.site.register(DoctorNotes)
admin.site.register(TestResult)