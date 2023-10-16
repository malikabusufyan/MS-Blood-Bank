const express = require("express");
const app = express();
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

//Port to run the server
const port = 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Listening of port
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is Running Perfectly: ${port}`);
});
