from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField


class ExtendUser(AbstractUser):
    email = models.EmailField(blank=False, max_length=255, verbose_name="email")

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"

    is_hospital = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.username}"


class Hospital(models.Model):
    user = models.OneToOneField(ExtendUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=False, verbose_name="Hospital Name")
    address = models.CharField(
        max_length=255, blank=True, verbose_name="Hospital Address"
    )
    phone = models.CharField(max_length=255, blank=True, verbose_name="Hospital Phone")
    longitude = models.FloatField(null=True, verbose_name="Hospital Longitude")
    latitude = models.FloatField(null=True, verbose_name="Hospital Latitude")

    def __str__(self) -> str:
        return f"{self.user.username} - {self.name}"


class Patient(models.Model):
    name = models.CharField(max_length=255, blank=False, verbose_name="Patient Name")
    phone = models.CharField(max_length=255, blank=True, verbose_name="Patient Phone")
    aadhar = models.CharField(
        max_length=20, blank=True, verbose_name="Patient Aadhar Number"
    )

    def __str__(self) -> str:
        return f"{self.name}"


class PatientAuthorizedHospital(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    hospital_id = models.ForeignKey(Hospital, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.patient_id.name} - {self.hospital_id.name}"


class ReferredPatients(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    hospital_referred_by = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name="referred_out")
    hospital_referred = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name="referred_in")
    reason_referred = models.CharField(
        max_length=255, blank=False, verbose_name="Reason Referred"
    )

    def __str__(self) -> str:
        return f"{self.patient.name} - by {self.hospital_referred_by.name} to {self.hospital_referred.name} for {self.reason_referred}"
