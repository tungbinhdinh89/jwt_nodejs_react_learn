import express from "express";
const router = express.Router();
import apiController from "../controller/apiController";
import userController from "../controller/userController";

const initApiRoutes = (app) => {
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);

  router.get("/user/read", userController.getUsers);
  router.post("/user/create", userController.createUser);
  router.put("/user/edit", userController.editUser);
  router.delete("/user/delete", userController.deleteUser);

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
