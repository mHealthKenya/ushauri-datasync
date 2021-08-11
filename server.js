const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("express-async-errors");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

// adding Helmet to enhance your API's security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const clients = require("./routes/faces_sync");

app.use("/sync", clients);

const PORT = process.env.PORT || 4040;
app.listen(PORT, () =>
    console.log(`Ushauri Web App started. Listening on Port: ${PORT}`)
);