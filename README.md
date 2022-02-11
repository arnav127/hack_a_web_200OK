# Hack A Web Team 200OK

Team Members:
1. Arnav Dixit
2. Gyanendra Shukla
3. Seshal Jain

## Branches

- Frontend
    - `front/prod` --> production deployed branch
    - `front/dev` --> active development branch
    - `front/f/*` --> feature branches
- Backend
    - `back/prod` --> production deployed branch
    - `back/dev` --> active development branch
    - `back/f/*` --> feature branches
    
## Setup Instructions

To start both the frontend and backend server follow these instructions to checkout both branches and start the server:

```sh
git clone git@github.com:arnav127/200OK.git # use https if preferred
cd 200OK # cd into the cloned folder

git worktree add ../front front/dev # for production use front/prod
git worktree add ../back back/dev # for production use back/prod

cd ..
```

### Install Dependencies:
- Frontend: `cd front && yarn`
- Backend: `cd back && pipenv install`

### Start Server: 
- Frontend: `cd front && yarn start`
- Backend: `cd back && pipenv run python manage.py runserver`

Make sure you have the appropriate `.env.development`(or `.env.production` for production build) in the root folder of the respective branch

