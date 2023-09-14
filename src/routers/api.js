import express from "express";
const router = express.Router();
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

router.all("*", checkUserJWT, checkUserPermission);

// const checkUser = (req, res, next) => {
//   const nonSecurePaths = ["/", "/register", "/login"];
//   if (nonSecurePaths.includes(req.path)) return next();

//   //authenticate user
//   next();
// };

const initApiRoutes = (app) => {
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);
  router.get("/account", userController.getUserAccount);

  router.get("/user/read", userController.getUsers);
  router.post("/user/create", userController.createUser);
  router.put("/user/edit", userController.editUser);
  router.delete("/user/delete", userController.deleteUser);

  router.get("/group/read", groupController.getGroupList);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
