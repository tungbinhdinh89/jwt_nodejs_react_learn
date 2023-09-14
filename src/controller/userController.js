import userApiService from "../service/userApiService";

const getUsers = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = +req.query.page;
      let limit = +req.query.limit;
      let data = await userApiService.getUserWithPagination(page, limit);
      return res.status(200).json({
        errorMessage: data.EM,
        errorCode: data.EC,
        data: data.DT,
      });
    } else {
      let data = await userApiService.getAllUser();
      return res.status(200).json({
        errorMessage: data.EM,
        errorCode: data.EC,
        data: data.DT,
      });
    }
  } catch (error) {
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const createUser = async (req, res) => {
  try {
    // validate
    let data = await userApiService.createUser(req.body);
    return res.status(200).json({
      errorMessage: data.EM,
      errorCode: data.EC,
      data: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const editUser = async (req, res) => {
  try {
    let data = await userApiService.updateUser(req.body);

    return res.status(200).json({
      errorMessage: data.EM,
      errorCode: data.EC,
      data: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let data = await userApiService.deleteUser(req.body.id);
    return res.status(200).json({
      errorMessage: data.EM,
      errorCode: data.EC,
      data: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const getUserAccount = async (req, res) => {
  return res.status(200).json({
    errorMessage: "oke",
    errorCode: 0,
    data: {
      access_token: req.token,
      user: req.user,
    },
  });
};
module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
  getUserAccount,
};
