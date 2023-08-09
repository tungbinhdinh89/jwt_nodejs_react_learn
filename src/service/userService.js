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

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      " SELECT * FROM users WHERE id=? ",
      [id]
    );
    return rows;
  } catch (err) {
    console.log("check err :", err);
  }
};
const updateUser = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      " UPDATE users SET email = ?, username = ? WHERE id = ? ",
      [email, username, id]
    );
    return rows;
  } catch (err) {
    console.log("check error : ", err);
  }
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  updateUser,
  getUserById,
};
