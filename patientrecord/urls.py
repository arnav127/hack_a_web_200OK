from django.urls import path
import patientrecord.views as views

urlpatterns = [
    path('', views.download, name='download'),
]