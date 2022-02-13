from django.db import models
from opd.models import Doctor
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
    prescriptions = models.ManyToManyField(MedicinePrescription, blank=True)
    prescription = models.CharField(
        max_length=255, blank=False, verbose_name="Prescription Names"
    )

    def __str__(self) -> str:
        return f"MedRec - {self.patient.name}"


class DoctorNotes(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    diagnosis = models.TextField(blank=True, verbose_name="Diagnosis")
    notes = models.TextField(blank=True, verbose_name="Doctor Notes")
    predicted_disease = models.CharField(
        max_length=255, blank=True, verbose_name="Predicted Disease"
    )

    def __str__(self) -> str:
        return f"Notes - {self.patient.name} - {self.doctor.name}"


class TestResult(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    test_name = models.CharField(max_length=255, verbose_name="Test Name")
    test_result = models.TextField(verbose_name="Test Result")

    media = models.TextField(blank=True, default="")

    def __str__(self) -> str:
        return f"{self.test_name} Test - {self.patient.name}"
