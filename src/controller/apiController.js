import loginRegisterService from "../service/userRequestFE";

const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test",
  });
};

const handleRegister = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.phone ||
      !req.body.username ||
      !req.body.password
    ) {
      return res.status(200).json({
        errorMessage: "Missing required parameters",
        errorCode: "1",
        data: "",
      });
    }
    if (req.body.password.length < 6) {
      return res.status(200).json({
        errorMessage: "Password must be greater than 6 character",
        errorCode: "1",
        data: "",
      });
    }

    // service: create user

    let data = await loginRegisterService.registerNewUser(req.body);
    return res.status(200).json({
      errorMessage: data.EM,
      errorCode: data.EC,
      data: "",
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

const handleLogin = async (req, res) => {
  try {
    // valid data req

    // check data exist

    // service: login user
    let data = await loginRegisterService.userLogin(req.body);
    // set cookie
    res.cookie("jwt", data.DT.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    // property httpOnly prevent client get cookie

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
  // ;

  // console.log("check login :", req.body);
};
module.exports = { testApi, handleRegister, handleLogin };
