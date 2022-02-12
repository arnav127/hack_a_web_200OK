from django.contrib.auth import get_user_model

User = get_user_model()

hosp1 = User.objects.create_superuser("hosp1", "hosp1@hospital.com", "password")
hosp2 = User.objects.create_superuser("hosp2", "hosp1@hospital.com", "password")
hosp3 = User.objects.create_superuser("hosp3", "hosp1@hospital.com", "password")

from user.models import ExtendUser, Hospital, Patient, PatientAuthorizedHospital


h1 = Hospital.objects.create(
    user=hosp1,
    name="Hospital 1",
    address="Hospital 1 Address",
    phone="Hospital 1 Phone",
    longitude="10.10",
    latitude="10.10",
)
ExtendUser.objects.get(username="hosp1").is_hospital = True

h2 = Hospital.objects.create(
    user=hosp2,
    name="Hospital 2",
    address="Hospital 2 Address",
    phone="Hospital 2 Phone",
    longitude="10.10",
    latitude="10.10",
)
ExtendUser.objects.get(username="hosp2").is_hospital = True

h3 = Hospital.objects.create(
    user=hosp3,
    name="Hospital 3",
    address="Hospital 3 Address",
    phone="Hospital 3 Phone",
    longitude="10.10",
    latitude="10.10",
)
ExtendUser.objects.get(username="hosp3").is_hospital = True

p1 = Patient.objects.create(
    name="Patient 1",
    phone="Patient 1 Phone",
    aadhar="Patient 1 Aadhar",
)

p2 = Patient.objects.create(
    name="Patient 2",
    phone="Patient 2 Phone",
    aadhar="Patient 2 Aadhar",
)

p3 = Patient.objects.create(
    name="Patient 3",
    phone="Patient 3 Phone",
    aadhar="Patient 3 Aadhar",
)

p4 = Patient.objects.create(
    name="Patient 4",
    phone="Patient 4 Phone",
    aadhar="Patient 4 Aadhar",
)

p1h1 = PatientAuthorizedHospital.objects.create(
    patient_id=p1,
    hospital_id=h1,
)

p2h1 = PatientAuthorizedHospital.objects.create(
    patient_id=p2,
    hospital_id=h1,
)

p2h2 = PatientAuthorizedHospital.objects.create(
    patient_id=p2,
    hospital_id=h2,
)

p4h3 = PatientAuthorizedHospital.objects.create(
    patient_id=p4,
    hospital_id=h3,
)

from patientrecord.models import (
    MedicinePrescription,
    MedicineRecord,
    TestResult,
    DoctorNotes,
)

# pres1 = MedicinePrescription.objects.create(
#     medicine="med1",
#     doses="dosage1",
# )
# pres2 = MedicinePrescription.objects.create(
#     medicine="med2",
#     doses="dosage2",
# )
# pres3 = MedicinePrescription.objects.create(
#     medicine="med3",
#     doses="dosage3",
# )

# medrec1 = MedicineRecord(
#     patient = p1,
# )
# medrec1.prescriptions.add(pres1)
# medre

# medrec2 = MedicineRecord.objects.create(
#     patient = p1,
# )
# medrec2.prescriptions.add(pres2)


# medrec3 = MedicineRecord.objects.create(
#     patient = p2,
#     prescriptions = pres2,
# )

# medrec4 = MedicineRecord.objects.create(
#     patient = p3,
#     prescriptions = pres1,
# )

## creating doctors
from opd.models import Doctor, DoctorPatientAssigned

doc1 = User.objects.create_superuser("doctor1", "d1@doctor.com", "password")
doc2 = User.objects.create_superuser("doctor2", "d2@doctor.com", "password")
doc3 = User.objects.create_superuser("doctor3", "d3@doctor.com", "password")
doc4 = User.objects.create_superuser("doctor4", "d4@doctor.com", "password")


d1h1 = Doctor.objects.create(
    user=doc1,
    name="Doctor 1",
    hospital=h1,
    specialization="Doctor 1 Specialization",
)

d2h1 = Doctor.objects.create(
    user=doc2,
    name="Doctor 2",
    hospital=h1,
    specialization="Doctor 2 Specialization",
)

d1h2 = Doctor.objects.create(
    user=doc3,
    name="Doctor 3",
    hospital=h2,
    specialization="Doctor 3 Specialization",
)

d1h3 = Doctor.objects.create(
    user=doc4,
    name="Doctor 4",
    hospital=h3,
    specialization="Doctor 4 Specialization",
)

d1h1p1 = DoctorPatientAssigned.objects.create(
    doctor_id=d1h1.id,
    patient_id=p1.id,
    status="done",
)

d1h1p2 = DoctorPatientAssigned.objects.create(
    doctor_id=d1h1.id,
    patient_id=p2.id,
    status="waiting",
)

d1h3p4 = DoctorPatientAssigned.objects.create(
    doctor_id=d1h3.id,
    patient_id=p4.id,
    status="reffered",
)


docnotes1 = DoctorNotes.objects.create(
    patient=p1,
    doctor=d1h1,
    diagnosis="malaria",
    notes="patient is suffering from malaria",
)

docnotes2 = DoctorNotes.objects.create(
    patient=p4,
    doctor=d1h3,
    diagnosis="common cold",
    notes="patient is suffering from common cold",
)

testresult1 = TestResult.objects.create(
    patient=p4,
    test_name="test1",
    test_result="positive",
)
