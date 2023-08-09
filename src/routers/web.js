import express from "express";
const router = express.Router();
import homeController from "../controller/homeController";

/**
 * @param {*} app - express app
 * */
const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWord);

  router.get("/user", homeController.handleUserForm);
  return app.use("/", router);
};

export default initWebRoutes;
