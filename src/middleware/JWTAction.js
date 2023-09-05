require("dotenv").config();

import jwt from "jsonwebtoken";

const createJWT = () => {
  let payload = { name: "tung", address: "HCM" };
  let key = process.env.JWT_SECRET;
  let token = null;

  try {
    token = jwt.sign(payload, key);
    console.log("🚀 ~ token:", token);
  } catch (err) {
    console.log(err);
  }
  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let data = null;

  try {
    data = jwt.verify(token, key);
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createJWT,
  verifyToken,
};
