// npm i express sequelize mysql2 //
// npm i dotenv //
// npm i chalk //

// import express from 'express';
const express = require('express');
// import routes from './routes';
const routes = require('./routes');
// import sequelize connection

// express server
const app = express();
// set up port
const PORT = process.env.PORT || 3001;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
