from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField


class ExtendUser(AbstractUser):
    """
    The user used to log in through username and password
    """
    email = models.EmailField(blank=False, max_length=255, verbose_name="email")

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"

    is_hospital = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.username}"


class Hospital(models.Model):
    """
    Hospital stores the details about the hospital and it is created by the super
    """
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
    """
    The patient modelstores the details about the patient profile,that is their name aadhaar and phone number. In the future the auth can be shifted tohardware keys to provide and extra layer of authentication
    """
    name = models.CharField(max_length=255, blank=False, verbose_name="Patient Name")
    phone = models.CharField(max_length=255, blank=True, verbose_name="Patient Phone")
    aadhar = models.CharField(
        max_length=20, blank=True, verbose_name="Patient Aadhar Number"
    )

    def __str__(self) -> str:
        return f"{self.name}"


class PatientAuthorizedHospital(models.Model):
    """
    When a patient is admitted to the hospital a new entryis created in this model signifying that the hospital now has access to the records of the patient and when the patient is discharged this is removed
    """
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    hospital_id = models.ForeignKey(Hospital, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.patient_id.name} - {self.hospital_id.name}"


class ReferredPatients(models.Model):
    """
    When a hospital refers the patient to another hospital, a new record is created to show that the patient is now referred to this hospital
    """
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    hospital_referred_by = models.ForeignKey(
        Hospital, on_delete=models.CASCADE, related_name="referred_out"
    )
    hospital_referred = models.ForeignKey(
        Hospital, on_delete=models.CASCADE, related_name="referred_in"
    )
    reason_referred = models.CharField(
        max_length=255, blank=False, verbose_name="Reason Referred"
    )

    def __str__(self) -> str:
        return f"{self.patient.name} - by {self.hospital_referred_by.name} to {self.hospital_referred.name} for {self.reason_referred}"
