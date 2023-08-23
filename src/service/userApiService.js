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
      attributes: ["id", "email", "username", "address", "phone"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });

    let data = {
      totalRows: count,
      totalPage: Math.ceil(count / limit),
      users: rows,
    };

    return {
      EM: "get user and pagination successfully",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "something wrong in service!",
      EC: 1,
      DT: [],
    };
  }
};

const createUser = async (data) => {

  try {
     await db.User.create(data) 
    return {
      EM: 'Create new user succefully!',
      EC: 0,
      DT: []
    };
  } catch (error) {
    return {
      EM: "Something wrong in service!",
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
      return {
        EM: "Update user success!",
        EC: 0,
        DT: [],
      };
    } else {
      // not found
      return {
        EM: "user not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "something wrong in service!",
      EC: 1,
      DT: [],
    };
  }
};

const deleteUser = async (userId) => {
  try {
    let user = await db.User.findOne({
      where: {
        id: userId,
      },
    });
    if (user) {
      await user.destroy();
      return {
        EM: "Delete user successfully",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "user not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
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
