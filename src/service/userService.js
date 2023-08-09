import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, username, password) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
  });
  let hashPass = hashUserPassword(password);
  console.log("hashPass: ", hashPass);
  connection.query(
    " INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, hashPass],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      console.log(results); // results contains rows returned by server
    }
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  let users = [];
  //   connection.query(" Select * from users ", function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //       return users;
  //     }
  //     users = results;
  //     return users;
  //   });
  const [rows, fields] = await connection.execute(" Select * from users ");
  return rows;
};

module.exports = {
  createNewUser,
  getUserList,
};
