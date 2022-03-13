const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./server/routers");

const app = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());
// .env 환경 변수 사용하기
dotenv.config();

app.use(cors());
app.use("/", router);

const port = 5000;
console.log(`index js port: ${port}`);
app.listen(port, () => console.log(`${port} is running... `));
