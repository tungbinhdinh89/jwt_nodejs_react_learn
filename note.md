# Cài đặt thư viện express, dotenv, body-parser và ejs
npm i --save-exact express@4.17.2 dotenv@10.0.0 body-parser@1.19.1 ejs@3.1.6 

# Cài đặt thư viện babel và nodemon
npm i --save-exact @babel/core@7.15.4 @babel/node@7.15.4 @babel/preset-env@7.15.4 nodemon@2.0.15

# config nodemon và babel ở file package.json
them dong nay o file package.json sau phan test
"start": "nodemon --exec babel-node src/server.js"

# Setup server with express and body-parser
import bodyParser from 'body-parser'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

# install json webtoken
npm i --save-exact jsonwebtoken@8.5.1

# install cookie parser
npm i --save-exact cookie-parser@1.4.6

# setup and config mysql2 connect to db
homecontroller.js

// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

# Cài đặt thư viện mysql2
npm i --save-exact mysql2@2.3.3

# Cài dặt thư viện bcryptjs
npm i --save-exact bcryptjs@2.4.3

# Cài dặt thư viện bluebird
npm i --save-exact bluebird@3.7.2

# Cài dặt ORM sequelize
npm i --save-exact sequelize@6.13.0 sequelize-cli@6.3.0


# Config sequelize
 Tạo file .sequelizerc ở thư mục root

 // .sequelizerc

const path = require("path");

module.exports = {
  config: path.resolve("./server/config", "config.json"),
  "models-path": path.resolve("./server", "models"),
  "seeders-path": path.resolve("./server", "seeders"),
  "migrations-path": path.resolve("./server", "migrations"),
};
 run command: npx sequelize-cli init

 https://sequelize.org/docs/v6/getting-started/

 https://sequelize.org/docs/v6/other-topics/migrations/


 npx sequelize-cli db:migrate

 # running seed all
 npx sequelize-cli db:seed:all

 # how to make sequelize use singular table name
 https://stackoverflow.com/questions/21114499/how-to-make-sequelize-use-singular-table-names

timestamps: true,

# sequelize check or codition
https://stackoverflow.com/questions/46161500/sequelize-or-not-working

# How do I calculate the offsets for pagination?
https://stackoverflow.com/questions/27992413/how-do-i-calculate-the-offsets-for-pagination

# Sequelize exclude belongs-to-many mapping object
https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object

# Express Session Cookie Not Being Set when using React Axios POST Request
https://stackoverflow.com/questions/63251837/express-session-cookie-not-being-set-when-using-react-axios-post-request

# How to get all cookie from browser
https://stackoverflow.com/questions/252665/i-need-to-get-all-the-cookies-from-the-browser

# Use specific middleware in Express for all paths except a specific one
https://stackoverflow.com/questions/12921658/use-specific-middleware-in-express-for-all-paths-except-a-specific-one

# Chaining of middleware in Express
https://stackoverflow.com/questions/58279138/chaining-of-middleware-in-express

# Preflight request doesn't pass access control check: It does not have HTTP ok status problem and i don't know why, i imported everything right
https://stackoverflow.com/questions/67860273/preflight-request-doesnt-pass-access-control-check-it-does-not-have-http-ok-st

# Response to preflight request doesn't pass access control check - No 'Access-Control-Allow-Origin' header
https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check-no-access-con

# How to extract token string from Bearer token?
https://stackoverflow.com/questions/50284841/how-to-extract-token-string-from-bearer-token

# bootstrap 5 cdn 
<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
