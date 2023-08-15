import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
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

const checkHashPassword = (userPassword, hashPassword) => {
  return bcrypt.compareSync(userPassword, hashPassword); // true or false
};

const userLogin = async (rawUserData) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [
          { email: rawUserData.valueLogin },
          { phone: rawUserData.valueLogin },
        ],
      },
    });

    if (user) {
      console.log("found user data :", user.get({ plain: true }));
      let isCorrectPassword = checkHashPassword(
        rawUserData.password,
        user.password
      );
      if (isCorrectPassword) {
        return {
          EM: "Login user successfully!",
          EC: 0,
          DT: "",
        };
      }
    }
    console.log(
      "Input user with email/phone: ",
      rawUserData.valueLogin,
      "password :",
      rawUserData.password
    );
    return {
      EM: "Your email/phone number or password is incorrect!",
      EC: 1,
      DT: "",
    };

    // console.log("check user javascript obj: ", user.get({ plain: true })); // làm việc với data thì dùng javascript obj
    // console.log("check user sequelize obj: ", user); // khi thao tác với sequelize, như thêm, xoá, sửa người dùnh thì làm việc với sequelize obj
  } catch (error) {}
  console.log("error: ", error);
  return {
    errorMessage: "something wrong is server...",
    errorCode: "-2",
  };
};

module.exports = {
  registerNewUser,
  userLogin,
};
