require("dotenv").config();
const mongoose = require("mongoose");

const dbSate = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

const connection = async () => {
  // Or:
  try {
    await mongoose.connect("mongodb://root:123456@localhost:27018");
    const state = Number(mongoose.connection.readyState);
    console.log(dbSate.find((f) => f.value == state).label, "to db"); // connected
  } catch (error) {
    console.log(">>> Error connection DB: ", error);
  }
};

module.exports = connection;
