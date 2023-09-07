require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import initApiRoutes from "./routers/api";
import configCors from "./config/cors";

// import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 5217;

// config view engine
configViewEngine(app);

// config cors
configCors(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cookie-parser
app.use(cookieParser());

// test connection db
// connection();

// test jwt

// init web routes
initWebRoutes(app);

// init api routes
initApiRoutes(app);

app.use((req, res) => {
  return res.send("404 not found");
});

app.listen(PORT, () => {
  console.log("Back end server is running on the port = " + PORT);
});
