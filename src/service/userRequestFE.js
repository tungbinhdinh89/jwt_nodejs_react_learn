require("dotenv").config();
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
import { Op } from "sequelize";

import db from "../models/index";
import { getGroupWithRoles } from "./JWTService";
import { createJWT } from "../middleware/JWTAction";

const checkEmailExist = async (email) => {
  let user = await db.User.findOne({
    where: { email },
  });
  if (user) {
    return true;
  }
  return false;
};

const checkPhoneExist = async (phone) => {
  let user = await db.User.findOne({
    where: { phone: phone },
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
  let isPhoneExist = await checkPhoneExist(rawUserData.phone);

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
      phone: rawUserData.phone,
      username: rawUserData.username,
      password: hashPass,
      group_id: 4,
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
      let isCorrectPassword = checkHashPassword(
        rawUserData.password,
        user.password
      );
      if (isCorrectPassword) {
        //let token

        // test role

        let groupWithRoles = await getGroupWithRoles(user);

        const payload = {
          email: user.email,
          username: user.username,
          groupWithRoles,
        };
        let token = createJWT(payload);

        return {
          EM: "Login user successfully!",
          EC: 0,
          DT: {
            access_token: token,
            groupWithRoles,
            email: user.email,
            username: user.username,
          },
        };
      }
    }

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
  checkEmailExist,
  checkPhoneExist,
  hashUserPassword,
};
