import bcrypt from "bcryptjs";
import db from "../models";

const salt = bcrypt.genSaltSync(10);

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "email", "username", "address", "phone"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });
    if (users) {
      return {
        EM: "get user succefully!",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "get user succefully!",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log("error: ", error);
    return {
      EM: "something wrong in service!",
      EC: 1,
      DT: [],
    };
  }
};

const createUser = async (data) => {
  let user = await db.User.create({
    where: {
      id: userId,
    },
  });
  try {
  } catch (error) {
    console.log("error: ", error);
    return {
      EM: "something wrong in service!",
      EC: 1,
      DT: [],
    };
  }
};

const updateUser = async (data) => {
  try {
    let user = await db.User.findOne({
      where: { id: data.id },
    });

    if (user) {
      // update user
      user.save({});
    } else {
      // not found
    }
  } catch (error) {
    console.log("error: ", error);
    return {
      EM: "something wrong in service!",
      EC: 1,
      DT: [],
    };
  }
};

const deleteUser = async (userId) => {
  await db.User.destroy({
    where: {
      id: userId,
    },
  });

  try {
  } catch (error) {
    console.log("error: ", error);
    return {
      EM: "something wrong in service!",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
