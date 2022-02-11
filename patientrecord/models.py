from typing import Any
from django.db import models
from user.models import Hospital, Patient
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class MedicinePrescription(models.Model):
    medicine = models.CharField(max_length=255, blank=False, verbose_name="Medicine Name")
    doses = models.CharField(max_length=255, blank=True, verbose_name="Doses")

    def __str__(self) -> str:
        return f'{self.medicine} - {self.doses}'

class MedicineRecord(models.Model):
    patient = models.OneToOneField(Patient, on_delete=models.CASCADE)
    prescriptions = models.ManyToManyField(MedicinePrescription, blank=False)

    def __str__(self) -> str:
        return f'MedRec - {self.patient.name}'

