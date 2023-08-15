import userApiService from "../service/userApiService";

const getUsers = async (req, res) => {
  try {
    let data = await userApiService.getAllUser();
    return res.status(200).json({
      errorMessage: data.EM,
      errorCode: data.EC,
      data: data.DT,
    });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const createUser = (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const editUser = (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      errorMessage: "error from server",
      errorCode: "-1",
      data: "",
    });
  }
};

const deleteUser = (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
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
