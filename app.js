const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const url =
//   "mongodb+srv://Vignes:connected@cluster0.jenuujt.mongodb.net/Users?retryWrites=true&w=majority";

const app = express();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const crudRouter = require("./routes/users");
app.use("/users", crudRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on : ${PORT}`);
});
