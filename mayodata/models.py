from django.db import models

class DiseaseInfo(models.Model):
    name = models.CharField(max_length=255, blank=False, verbose_name="Disease Name")
    link = models.TextField(verbose_name="More info Link")
    symptoms = models.TextField(verbose_name="Symptoms")
    causes = models.TextField(verbose_name="Causes")
    risk_factor = models.TextField(verbose_name="Risk Factor")
    overview = models.TextField(verbose_name="Overview")
    treatment = models.TextField(verbose_name="Treatment")
    medication = models.TextField(verbose_name="Medication")
    prevention = models.TextField(verbose_name="Prevention")

    def __str__(self):
        return self.name