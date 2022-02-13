# import pandas as pd
# df = pd.read_csv('D:/workspace/hawhack/backd/dataset/df_diseases.csv')
# del df['id']
# df.columns = [c.lower() for c in df.columns]
# print(df.head(5))

# from sqlalchemy import create_engine
# engine = create_engine('postgresql://postgres:password@localhost:5432/hackthewebdb')

# df.to_sql('mayo_diseaseinfo', engine, if_exists='replace', index=False)


import csv

from mayodata.models import DiseaseInfo


filepath = "D:/workspace/hawhack/backd/dataset/df_diseases.csv"
with open(filepath, encoding="utf8") as f:
    reader = csv.reader(f)
    for row in reader:
        _, created = DiseaseInfo.objects.get_or_create(
            name=row[1],
            link=row[2],
            symptoms=row[3],
            causes=row[4],
            risk_factor=row[5],
            overview=row[6],
            treatment=row[7],
            medication=row[8],
            prevention=row[9],
        )
