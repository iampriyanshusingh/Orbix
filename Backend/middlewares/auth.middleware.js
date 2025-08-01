const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await userModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await captainModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await captainModel.findById(decoded._id);

    req.captain = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
