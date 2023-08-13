import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const checkEmailExist = async (email) => {
  let user = await db.User.findOne({
    where: { email },
  });
  if (user) {
    return true;
  }
  return false;
};

const checkPhoneExist = async (phoneNumber) => {
  let user = await db.User.findOne({
    where: { phone: phoneNumber },
  });
  if (user) {
    return true;
  }
  return false;
};

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const registerNewUser = async (rawUserData) => {
  // check email, phone number are exist
  let isEmailExist = await checkEmailExist(rawUserData.email);
  let isPhoneExist = await checkPhoneExist(rawUserData.phoneNumber);

  if (isEmailExist === true) {
    return {
      EM: "Email is already exist!",
      EC: 1,
    };
  }

  if (isPhoneExist === true) {
    return {
      EM: "Phone Number is already exist!",
      EC: 1,
    };
  }

  // hash user password
  let hashPass = hashUserPassword(rawUserData.password);

  // create new user
  try {
    await db.User.create({
      email: rawUserData.email,
      phone: rawUserData.phoneNumber,
      username: rawUserData.username,
      password: hashPass,
    });

    return {
      EM: "A user is created successfully",
      EC: 0,
    };
  } catch (err) {
    return {
      EM: "Something wrongs in service",
      ER: -2,
    };
  }
};

module.exports = {
  registerNewUser,
};
