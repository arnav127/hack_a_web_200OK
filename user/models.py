from django.db import models
from django.contrib.auth.models import AbstractUser


class ExtendUser(AbstractUser):
    email = models.EmailField(blank=False, max_length=255, verbose_name="email")
    full_name = models.CharField(max_length=255, blank=False, verbose_name="full name")
    display_name = models.CharField(max_length=255, blank=True, verbose_name="display name")
    bio = models.TextField(blank=True, verbose_name="bio")
    location = models.CharField(max_length=255, blank=True, verbose_name="location")

    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
    
    def __str__(self) -> str:
        return f'{self.username}'
