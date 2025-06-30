const Users = require("../Models/UserModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  console.log("-- invoking register --");

  const { name, email, password } = req.body;
  console.log("request:", req.body);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  const userAvailable = await Users.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User is already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password:", hashedPassword);

  const user = await Users.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(200).json(user);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("-- invoking login --");
  const user = await Users.findOne({ email });
  console.log("user =>", user);
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          role: user.role,
        },
      },
      process.env.ACCES_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    console.log("accesToken:", accessToken);
    res.status(200).json({
      data: user,
      accessToken: accessToken,
    });
  } else {
    res.status(200);
    throw new Error("email or password not valid");
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await Users.findById(id);
  res.status(200).json({ user });
});

const deleteUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await Users.deleteOne({ _id: id });

  const remainingUser = await Users.find();

  res.status(200).json({
    message: "users list",
    data: remainingUser,
    count: remainingUser.length,
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const user = await Users.find().lean();
  res.status(200).json({
    message: "All users",
    data: user,
    count: user.length,
  });
});

module.exports = {
  registerUser,
  loginUser,
  getUserById,
  deleteUserById,
  getAllUsers,
};
