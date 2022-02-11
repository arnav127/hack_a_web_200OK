from django.db import models
from django.contrib.auth.models import AbstractUser


class ExtendUser(AbstractUser):
    email = models.EmailField(blank=False, max_length=255, verbose_name="email")

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
    
    def __str__(self) -> str:
        return f'{self.username}'


class Hospital(models.Model):
    user = models.OneToOneField(ExtendUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=False, verbose_name="Hospital Name")
    address = models.CharField(max_length=255, blank=True, verbose_name="Hospital Address")
    phone = models.CharField(max_length=255, blank=True, verbose_name="Hospital Phone")
    longitude = models.FloatField(null=True, verbose_name="Hospital Longitude")
    latitude = models.FloatField(null=True, verbose_name="Hospital Latitude")

    def __str__(self) -> str:
        return f'{self.user.username} - {self.name}'


class Patient(models.Model):
    name = models.CharField(max_length=255, blank=False, verbose_name="Patient Name")
    phone = models.CharField(max_length=255, blank=True, verbose_name="Patient Phone")
    aadhar = models.CharField(max_length=20, blank=True, verbose_name="Patient Aadhar Number")
    


# medicines
# test result
# doctor notes
