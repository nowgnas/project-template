const mongoose = require("mongoose");

const { User } = require("./models/Users");
const dbConfig = require("../config/db");

// Config에 mongoDB의 사용자 이름과 비밀번호를 선언
const usr = dbConfig.username;
const pw = dbConfig.password;

const url = "mongodb url";

mongoose.connect(url);
const db = mongoose.connection;

db.on("connected", () => {
  console.log(
    `\n\n******************\n now db connecting ${collectionName}....\n******************\n\n`
  );
});

db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + url + "\n" + error)
);

module.exports = { User };
