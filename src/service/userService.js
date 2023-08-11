import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, username, password) => {
  let hashPass = hashUserPassword(password);

  try {
    await db.User.create({
      email: email,
      username: username,
      password: hashPass,
    });
  } catch (err) {
    console.log("check error :", err);
  }
};

const getUserList = async () => {
  let users = await db.User.findAll();
  return users;
};

const deleteUser = async (userId) => {
  await db.User.destroy({
    where: {
      id: userId,
    },
  });
};

const getUserById = async (userId) => {
  let user = await db.User.findOne({
    where: {
      id: userId,
    },
  });

  return user;
};

const updateUser = async (email, username, id) => {
  await db.User.update(
    { email: email, username: username },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  updateUser,
  getUserById,
};
