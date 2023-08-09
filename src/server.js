import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routers/web";
require("dotenv").config();

const app = express();

// config view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);

const PORT = process.env.PORT || 5217;
app.listen(PORT, () => {
  console.log("Back end server is running on the port = " + PORT);
});
