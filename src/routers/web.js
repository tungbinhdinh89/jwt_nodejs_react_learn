import express from "express";
const router = express.Router();
import homeController from "../controller/homeController";

/**
 * @param {*} app - express app
 * */
const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWord);
  router.get("/users", homeController.handleUserPage);
  router.post("/users/create-user", homeController.handleCreateUser);

  return app.use("/", router);
};

export default initWebRoutes;
