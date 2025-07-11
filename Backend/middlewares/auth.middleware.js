const userModel = require("../models/user.model");
const bcrypt = requrie("bcrypt");
const jwt  = require("jsonwebtoken");


module.exports.authUser = async(req,res,next) =>{
    const token = req.cookies.token || req.headers.autho
}