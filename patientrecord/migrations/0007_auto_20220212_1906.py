# Generated by Django 3.2.12 on 2022-02-12 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("patientrecord", "0006_testresult_media"),
    ]

    operations = [
        migrations.AddField(
            model_name="medicinerecord",
            name="prescription",
            field=models.CharField(
                default="", max_length=255, verbose_name="Prescription Names"
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="medicinerecord",
            name="prescriptions",
            field=models.ManyToManyField(
                blank=True, to="patientrecord.MedicinePrescription"
            ),
        ),
    ]
