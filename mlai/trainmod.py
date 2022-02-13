import csv
import numpy as np
import pandas as pd
import pickle
from collections import defaultdict
from sklearn.naive_bayes import MultinomialNB
import sklearn
print(sklearn.__version__)

dis_loc = "D:/workspace/hawhack/backd/mlai/symptom.csv"

data = pd.read_csv(dis_loc)
data = data.fillna(method='ffill')

def process_name(data):
  data_list = []
  data_name = data.replace('^','_').split('_')
  n = 1
  for names in data_name:
    if n%2==0:
      data_list.append(names)
    n+=1
  return data_list


disease_list = []
disease_symptom_dict = defaultdict(list)
disease_symptom_count = {}
count = 0

for idx, row in data.iterrows():
    
    # Get the Disease Names
    if (row['Disease'] !="\xc2\xa0") and (row['Disease'] != ""):
        disease = row['Disease']
        disease_list = process_name(data=disease)
        count = row['Count of Disease Occurrence']

    # Get the Symptoms Corresponding to Diseases
    if (row['Symptom'] !="\xc2\xa0") and (row['Symptom'] != ""):
        symptom = row['Symptom']
        symptom_list = process_name(data=symptom)
        for d in disease_list:
            for s in symptom_list:
                disease_symptom_dict[d].append(s)
            disease_symptom_count[d] = count


# Saving the cleaned data
floc = "D:/workspace/hawhack/backd/mlai/dataset_clean.csv"
with open(floc,'w') as csvfile:
  writer = csv.writer(csvfile)
  for key, value in disease_symptom_dict.items():
    for v in value:
      key = str.encode(key).decode('utf-8')
      writer.writerow([key,v,disease_symptom_count[key]])


columns = ['Source', 'Target', 'Weight']
data = pd.read_csv(floc, names=columns, encoding='ISO-8859-1')
data.head()

data.to_csv(floc,index=False)


unique_diseases = data['Source'].unique()

unique_symptoms = data['Target'].unique()

df_1 = pd.get_dummies(data.Target)

df_s = data['Source']
df_pivoted = pd.concat([df_s, df_1], axis=1)
df_pivoted.drop_duplicates(keep='first',inplace=True)
df_pivoted = df_pivoted.groupby('Source',sort=False).sum()
df_pivoted = df_pivoted.reset_index()

flocpiv = 'D:/workspace/hawhack/backd/mlai/df_pivoted.csv'
df_pivoted.to_csv(flocpiv)

x = df_pivoted[df_pivoted.columns[1:]]
y = df_pivoted['Source']

weights = np.fromiter(disease_symptom_count.values(), dtype=float)
total=sum(weights)
prob = weights/total

mnb_tot = MultinomialNB()
mnb_tot = mnb_tot.fit(x.values, y)

mnb_tot.score(x, y)


disease_pred = mnb_tot.predict(x)

disease_real = y.values

# Using class prior prob
mnb_prob = MultinomialNB(class_prior=prob)
mnb_prob = mnb_prob.fit(x.values, y)

mnb_prob.score(x, y)

disease_pred = mnb_prob.predict(x)

## Saving the Naive Bayes Model
filename = 'D:/workspace/hawhack/backd/mlai/NB_model1.sav'
pickle.dump(mnb_tot, open(filename, 'wb'))

# Load model and predict
model = pickle.load(open(filename,'rb'))
# model.predict([100*[1]+100*[0]+204*[0]])

symptoms = df_pivoted.columns[1:].values
print(symptoms)


test_input = [0]*404
user_symptoms = list(input().split(','))
user_symptoms = [symp.strip() for symp in user_symptoms]
for symptom in user_symptoms:
    print(symptom)
    print(np.where(symptoms==symptom))
    if len(np.where(symptoms==symptom)[0]):
        test_input[np.where(symptoms==symptom)[0][0]] = 1
print('Most probable disease:',model.predict([test_input]))