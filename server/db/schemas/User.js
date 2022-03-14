const mongoose = require("mongoose");

// > 우선은 bcrypt 없이 사용자 스키마 만들기
const userSchema = mongoose.Schema({});
const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
