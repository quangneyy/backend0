const connection = require("../config/database");

const getHomepage = (req, res) => {
  // process data
  // call model
  let users = [];

  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    console.log(">>> results home page= ", results); // results contains rows returned by server

    // console.log(">>> check users: ", users);
    res.send(JSON.stringify(users));
  });
};

const getQuangNey = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getQuangNey,
};
