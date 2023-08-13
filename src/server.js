import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
import bodyParser from "body-parser";
import initApiRoutes from "./routers/api";
import configCors from "./config/cors";
// import connection from "./config/connectDB";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5217;

// config view engine
configViewEngine(app);

// config cors
configCors(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
// connection();

// init web routes
initWebRoutes(app);

// init api routes
initApiRoutes(app);

app.listen(PORT, () => {
  console.log("Back end server is running on the port = " + PORT);
});
