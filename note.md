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


# bootstrap 5 cdn 
<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
