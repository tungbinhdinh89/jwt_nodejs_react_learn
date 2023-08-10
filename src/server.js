import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
import bodyParser from "body-parser";
// import connection from "./config/connectDB";
require("dotenv").config();

const app = express();

// config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
// connection();

// init web routes
initWebRoutes(app);

const PORT = process.env.PORT || 5217;
app.listen(PORT, () => {
  console.log("Back end server is running on the port = " + PORT);
});
