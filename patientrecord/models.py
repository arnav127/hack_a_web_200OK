from django.db import models
from user.models import Hospital, Patient
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class MedicinePrescription(models.Model):
    medicine = models.CharField(
        max_length=255, blank=False, verbose_name="Medicine Name"
    )
    doses = models.CharField(max_length=255, blank=True, verbose_name="Doses")

    def __str__(self) -> str:
        return f"{self.medicine} - {self.doses}"


class MedicineRecord(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    prescriptions = models.ManyToManyField(MedicinePrescription, blank=False)

    def __str__(self) -> str:
        return f"MedRec - {self.patient.name}"


class DoctorNotes(models.Model):
    patient = models.OneToOneField(Patient, on_delete=models.CASCADE)
    doctor = models.CharField(max_length=255, verbose_name="Doctor Name")
    diagnosis = models.TextField(verbose_name="Diagnosis")
    notes = models.TextField(verbose_name="Doctor Notes")

    def __str__(self) -> str:
        return f"Notes - {self.patient.name}"


class TestResult(models.Model):
    patient = models.OneToOneField(Patient, on_delete=models.CASCADE)
    test_name = models.CharField(max_length=255, verbose_name="Test Name")
    test_result = models.TextField(verbose_name="Test Result")

    def __str__(self) -> str:
        return f"{self.test_name} Test - {self.patient.name}"
