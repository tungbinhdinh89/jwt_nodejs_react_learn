import userService from "../service/userService";

const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  // model => get data from database
  let userList = await userService.getUserList();

  return res.render("user.ejs", { userList });
};

const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  userService.createNewUser(email, username, password);
  return res.redirect("/users");
};

const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/users");
};

const getUpdateUserPage = async (req, res) => {
  let id = req.params.id;
  let userData = {};

  let user = await userService.getUserById(id);

  userData = user;

  return res.render("user-update.ejs", { userData });
};

const handleUpdateUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;

  await userService.updateUser(email, username, id);
  return res.redirect("/users");
};

module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateUser,
  handleDeleteUser,
  getUpdateUserPage,
  handleUpdateUser,
};
