import db from "../models";
const getGroups = async () => {
  try {
    let data = await db.Group.findAll({
      // attributes: ['id','name', 'description'],
      // order: [['name', 'DESC']]
    });

    if (data) {
      return {
        EM: "get group succefully!",
        EC: 0,
        DT: data,
      };
    } else {
      return {
        EM: "get group succefully!",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "something is wrong with server!",
      EC: 2,
      DT: [],
    };
  }
};

module.exports = {
  getGroups,
};
