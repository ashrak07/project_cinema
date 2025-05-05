const express = require("express");

const {
  registerUser,
  loginUser,
  deleteUserById,
  getAllUsers,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/user/register", registerUser);

router.post("/user/login", loginUser);

router.delete("/user/:id", deleteUserById);

router.get("/user/", getAllUsers);

module.exports = router;
