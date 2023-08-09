const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};

const handleUserForm = (req, res) => {
  return res.render("user.ejs");
};

module.exports = {
  handleHelloWord,
  handleUserForm,
};
