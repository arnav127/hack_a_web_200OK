# Generated by Django 3.2.12 on 2022-02-11 15:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patientrecord', '0003_medicinerecord_prescriptions'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PrescriptionForPatients',
        ),
    ]