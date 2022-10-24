# Softia - Technical Assessment

## Description
The goal is to create a form to generate records for students

## Installation
You must clone the repository, once done, you can type this command to initialize the project:
```bash
cd softia-app && npm install
```
You have different npm run choices:
```bash
npm run dev # Will start the express server on port 8080
npm run eslint # Will check if the eslint standard has been respected

npm run migrate # Will migrate tables to database
npm run populate # Will populate tables with data

npm run full # will migrate and populate the tables with data
```

ESLint is configured to use the basic standard from Airbnb.
There are only a few modifications that have been made to be able to adapt it to the syntax of the typescript.
