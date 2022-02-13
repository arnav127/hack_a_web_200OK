# Machine Learning Models

This app contains machine learning model for predicting the disease based on the symptoms. The data is taken from Columbia University's [Disease Classification](https://www.cs.columbia.edu/~mcollins/disease.html) dataset.

We've used scikit-learn's Naive Bayes classifier to train the model. We've got an accuracy of around 90%.

The function takes an input in the form of list of strings which are symptoms. The output is the predicted disease.

This model is beign used in the `DoctorNotes` model.