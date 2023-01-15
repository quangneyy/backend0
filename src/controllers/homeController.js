const getHomepage = (req, res) => {
  // process data
  // call model
  res.send("Hello World");
};

const getQuangNey = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getQuangNey,
};
