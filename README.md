# hackaweb_200ok
Hack-a-web 200OK


## Steps to run backend

1. Run `pipenv install` to install the Pipfile
2. Run `python manage.py runserver` to start the server

## Steps to setup database

Install PostgreSQL

1. Run `pipenv install` or `pipenv sync`
2. Add a `config.ini` file to the root directory of the project.
3. Add the following to the `config.ini` file:

   ```ini
   [database]
   USER=replace with your db username
   PASSWORD=replace with your db password
   HOST=localhost
   PORT=5432
   ```

4. Create a database named `hackthewebdb` in postgres by either using `pgAdmin` or
   running `create database hackthewebdb` in your psql terminal. See
   https://www.section.io/engineering-education/django-app-using-postgresql-database/
   if you want to create a new user for this database.
   1. Grant your user access to all permissions `GRANT ALL PRIVILEGES ON DATABASE hackthewebdb TO <yourname>;`
   2. Set the encoding as utf-8 `ALTER ROLE <yourname> SET client_encoding TO 'utf8';`
   3. Set the timezone to UTC `ALTER ROLE <yourname> SET timezone TO 'UTC';`
5. Now run `python manage.py makemigrations` to create the database tables.
6. And run `python manage.py migrate` to apply the changes to the database.

7. Optionally you can run `python manage.py createsuperuser` to create a
   superuser.
8. Start the server by running `python manage.py runserver`
