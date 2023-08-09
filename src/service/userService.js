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

  const [rows, fields] = await connection.execute(
    " INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, hashPass]
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  const [rows, fields] = await connection.execute(" Select * from users ");
  return rows;
};

const deleteUser = async (id) => {
  // DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    " DELETE FROM users WHERE id=? ",
    [id]
  );
  return rows;
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
};
