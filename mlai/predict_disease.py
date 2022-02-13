import os
import pickle
import numpy as np
import pandas as pd

fileloc = os.path.join(os.getcwd() + "/mlai/df_pivoted.csv")
print(os.getcwd())
df_pivoted = pd.read_csv(fileloc)

symptoms = df_pivoted.columns[1:].values

modelfilename = os.path.join(os.getcwd() + "/mlai/NB_model1.sav")
model = pickle.load(open(modelfilename, "rb"))


def predict_disease(user_symptoms):
    test_input = [0] * 404
    user_symptoms = [symp.strip() for symp in user_symptoms]
    for symptom in user_symptoms:
        if len(np.where(symptoms == symptom)[0]):
            test_input[np.where(symptoms == symptom)[0][0]] = 1
    return model.predict([test_input])

