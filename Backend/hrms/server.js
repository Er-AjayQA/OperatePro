// ********************** Import Statements ********************** //
// ======= Global Imports ======= //
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/index");

// ======= .env Imports ======= //
const PORT = process.env.PORT || 3000;

// ======= Import Routes ======= //

// ********************** App Initialization ********************** //
const app = express();

// ********************** Middlewares ********************** //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

// ********************** DB Sync ********************** //
// db.HRMS_USER.sync({ alter: true })
//   .then(() => {
//     console.log("DB Sync Successfully............");
//   })
//   .catch((err) => {
//     console.log("DB Sync Failed.............");
//     console.error(err);
//   });

// ********************** Listening to Server ********************** //
app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`Server is running on port: ${PORT}`);
  }
});
