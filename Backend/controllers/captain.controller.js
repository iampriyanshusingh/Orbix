const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async function (req, res, next) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    res.status(400).json({ errors: error.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const isCaptainAlready = await captainModel.findOne({ email });

  if (isCaptainAlready) {
    res.status(400).json({ message: "Captain Already Exist" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(200).json({ token, captain });
};
