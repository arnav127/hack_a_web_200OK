# Patient Records

This app contains various models for patient records.
It includes - 

1. `MedicineRecord` - This model contains the medicines prescribed to the patient.

2. `DoctorNotes` - This model contains the diagnosis and notes by the doctor. This model can be also used to store the notes given by patient before been seen by the doctor.
When creating the notes, the model automatically calls a machine learning model to predict the disease, this prediction can be then shown to the doctor to help him in the diagnosis.

3. `TestResult` - This model contains the test results of various tests. It also stores the link to the media files associated with the test, if it contains any.

This app also contains a path that can be used to download the all the records associated with the patient.