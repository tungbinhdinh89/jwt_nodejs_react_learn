import bcrypt from "bcryptjs";
import db from "../models";

const salt = bcrypt.genSaltSync(10);

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "email", "username", "address", "phone"],
      include: { model: db.Group, attributes: ["name", "description"] },
      nest: true,
      raw: true,
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

const getUserWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit,
    });

    let data = {
      totalRows: count,
      totalPage: Math.ceil(count / limit),
      users: rows,
    };
    console.log("check data: ", data);
    console.log("check rows: ", rows, "check count: ", count);

    return {
      EM: "get user and pagination successfully",
      EC: 0,
      DT: data,
    };
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
  getUserWithPagination,
  createUser,
  updateUser,
  deleteUser,
};
