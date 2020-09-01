# Description

Freelance website for Denver, Colorado based small business Maverick Mineral Partners. Hosted on Microsoft Azure as a Static Web App.

Uses Vue.js for frontend (client) and Azure functions for the backend (api) based in Node.js. Data is stored in Azure CosmosDB as JSON objects and served to the client via Azure function calls.


# Install dependencies

npm install


# Run Azure Functions

cd into the 'api' folder and `npm start`


# Run Client

cd into the 'client' folder and `npm start`


# Build for production with minification

npm run build


# Run unit tests

npm run unit


# Run all tests

npm test


# Publishing

Publishes are triggered from the master branch.