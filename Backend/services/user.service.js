const userModel = require("../models/user.model");

//will store the value in the database
//it is just creating the new user
module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
  });

  return user;
};
