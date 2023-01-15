require("dotenv").config();
const express = require("express"); //commonjs
// import express from "express";// es modules
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); // app express
const port = process.env.PORT || 8888; // port => hard . uat . prod
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai bao route
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
