import express from "express";
const router = express.Router();
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";

/**
 * @param {*} app - express app
 * */
const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWord);
  router.get("/users", homeController.handleUserPage);
  router.post("/users/create-user", homeController.handleCreateUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/update-user/:id", homeController.getUpdateUserPage);
  router.post("/user/update-user", homeController.handleUpdateUser);

  router.get("/api/test-api", apiController.testApi);
  return app.use("/", router);
};

export default initWebRoutes;
