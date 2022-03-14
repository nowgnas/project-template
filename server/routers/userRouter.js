const express = require("express");
const userRouter = express.Router();

const { userAuthService } = require("../services/userService");

userRouter.post("/api/users/register", async (req, res) => {});

module.exports = { userRouter };
