import io
import os
from django.http import HttpResponse
# Create your views here.
import random
from patientrecord.scripts import create_pdf

def download(request):
    # ... do stuff to get file contents and file name and mime_type
    patient_id = int(request.GET.get("patient_id"))
    
    file_name = create_pdf(patient_id)
    f= open(file_name, "rb")
    file_contents = f.read()

    response = HttpResponse(file_contents, content_type="application/pdf")
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(file_name)
    
    f.close()
    os.remove(file_name)

    return response