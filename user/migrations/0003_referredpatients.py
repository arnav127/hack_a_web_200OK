# Generated by Django 3.2.12 on 2022-02-12 09:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0002_auto_20220212_0919"),
    ]

    operations = [
        migrations.CreateModel(
            name="ReferredPatients",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "reason_referred",
                    models.CharField(max_length=255, verbose_name="Reason Referred"),
                ),
                (
                    "hospital_referred",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="referred_in",
                        to="user.hospital",
                    ),
                ),
                (
                    "hospital_referred_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="referred_out",
                        to="user.hospital",
                    ),
                ),
                (
                    "patient",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="user.patient"
                    ),
                ),
            ],
        ),
    ]
