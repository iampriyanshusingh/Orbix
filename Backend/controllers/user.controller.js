const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
// const blackListTokenModel = require("../models/blacklistedToken.model");

//will take the response from the user by .post api
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password } = req.body;

  const isUserAlready = await userModel.findOne({ email });

  if (isUserAlready) {
    return res.status(400).json({ message: "User Already exist" });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });

  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  res.cookie("token", token, {
    expires: new Date(Date.now()),
  });

  // await blackListTokenModel.create({ token });

  res.status(200).json({ message: "logged out successfully" });
};
