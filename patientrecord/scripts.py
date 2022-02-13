from user.models import Patient
from patientrecord.models import TestResult, DoctorNotes, MedicineRecord
from fpdf import FPDF

def pdf_testresult(pdf, records):
    pdf.add_page()
    pdf.set_font('courier', 'B', 16)
    pdf.cell(40, 10, 'Test Records', 0, 1)
    pdf.cell(40, 10, '',0,1)
    pdf.set_font('courier', '', 12)
    pdf.cell(200, 8, f"{'Test Name'.ljust(30)} {'Test Result'.rjust(20)}", 0, 1)
    pdf.line(10, 30, 150, 30)
    pdf.line(10, 38, 150, 38)
    for line in records:
        pdf.cell(200, 8, f"{line.test_name.ljust(30)} {line.test_result.rjust(20)}", 0, 1)
        pdf.cell(200,8, f"Link: {line.media.ljust(200)}")

    return pdf

def pdf_doctornotes(pdf, records):
    pdf.add_page()
    pdf.set_font('courier', 'B', 16)
    pdf.cell(40, 10, 'Doctor Notes', 0, 1)
    pdf.cell(40, 10, '',0,1)
    pdf.set_font('courier', '', 12)
    pdf.cell(200, 8, f"{'Doctor'.ljust(20)} {'Diagnosis'.ljust(20)} {'Notes'.rjust(20)}", 0, 1)
    pdf.line(10, 30, 200, 30)
    pdf.line(10, 38, 200, 38)
    for line in records:
        pdf.cell(200, 8, f"{line.doctor.name.ljust(20)} {line.diagnosis.rjust(20)} {line.notes.rjust(20)}", 0, 1)

    return pdf

def pdf_medicinerecords(pdf, records):
    pdf.add_page()
    pdf.set_font('courier', 'B', 16)
    pdf.cell(40, 10, 'Medicine Records', 0, 1)
    pdf.cell(40, 10, '',0,1)
    pdf.set_font('courier', '', 12)
    pdf.cell(200, 8, f"{'Prescription'.ljust(20)}", 0, 1)
    pdf.line(10, 30, 150, 30)
    pdf.line(10, 38, 150, 38)
    for line in records:
        pdf.cell(200, 8, f"{line.prescription.ljust(20)}", 0, 1)

    return pdf

def create_pdf(pat_id):
    pdf = FPDF('P', 'mm', 'A4')
    patient = Patient.objects.get(pk=pat_id)
    tr = TestResult.objects.filter(patient=patient)
    pdf = pdf_testresult(pdf, tr)
    dn = DoctorNotes.objects.filter(patient=patient)
    pdf = pdf_doctornotes(pdf, dn)
    mr = MedicineRecord.objects.filter(patient=patient)
    pdf = pdf_medicinerecords(pdf, mr)

    return pdf.output(f'file-{pat_id}.pdf', 'S')