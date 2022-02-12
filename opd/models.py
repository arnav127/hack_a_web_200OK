from django.db import models
from user.models import ExtendUser, Hospital, Patient

# Create your models here.


class Doctor(models.Model):
    user = models.OneToOneField(ExtendUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=False, verbose_name="Doctor Name")
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE)

    specialization = models.CharField(
        max_length=255, blank=False, verbose_name="Specialization"
    )

    def __str__(self):
        return f"{self.name} - {self.hospital.name}"


class DoctorPatientAssigned(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    assigned_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255, blank=False, verbose_name="Status")

    def __str__(self) -> str:
        return f"{self.patient.name} - {self.doctor.name} - {self.status}"
