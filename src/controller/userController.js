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
      console.log("data Tung 2: ", data);
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
   let data =  await userApiService.createUser(req.body)
   return res.status(200).json({
    errorMessage: data.EM,
    errorCode: data.EC,
    data: data.DT,
  })
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
    let data = await userApiService.updateUser();
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
    console.log("check body: ", req.body);
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

module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
};
