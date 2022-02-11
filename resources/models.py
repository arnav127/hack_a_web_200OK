from django.db import models
from user.models import Hospital

# Create your models here.

class HospitalResources(models.Model):
    hospital = models.OneToOneField(Hospital, on_delete=models.CASCADE)
    
    bed_capacity = models.IntegerField(default=0, verbose_name="Beds Count")
    bed_available = models.IntegerField(default=0, verbose_name="Beds Available")
    ventilator_capacity = models.IntegerField(default=0, verbose_name="Ventilator Capacity")
    ventilator_available = models.IntegerField(default=0, verbose_name="Ventilator Available")
    icu_capacity = models.IntegerField(default=0, verbose_name="ICU Capacity")
    icu_available = models.IntegerField(default=0, verbose_name="ICU Available")

    blood_test = models.BooleanField(default=False, verbose_name="Blood Test")
    urine_test = models.BooleanField(default=False, verbose_name="Urine Test")

    xray = models.BooleanField(default=False, verbose_name="X-Ray")
    ultrasound = models.BooleanField(default=False, verbose_name="Ultrasound")
    mri = models.BooleanField(default=False, verbose_name="MRI")
    ekg = models.BooleanField(default=False, verbose_name="EKG")
    ecg = models.BooleanField(default=False, verbose_name="ECG")
    eeg = models.BooleanField(default=False, verbose_name="EEG")
    catscan = models.BooleanField(default=False, verbose_name="Cat Scan")

    mammogram = models.BooleanField(default=False, verbose_name="Mammogram")
    colonoscopy = models.BooleanField(default=False, verbose_name="Colonoscopy")


    def __str__(self) -> str:
        return f'{self.hospital.name} Resources'