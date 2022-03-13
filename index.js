const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

const port = 3001;
app.listen(port, () => console.log(`${port} is running... `));
