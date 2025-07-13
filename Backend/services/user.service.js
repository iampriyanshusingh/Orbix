const userModel = require("../models/user.model");

//will store the value in the database
//it is just creating the new user
module.exports.createUser = async ({ firstName, email, password }) => {
  if (!firstName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullName: {
      firstName,
    },
    email,
    password,
  });

  return user;
};
