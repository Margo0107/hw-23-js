const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//connected__mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error"));
db.once("open", () => console.log("MongoDB connected!"));

//connect rout
const todoRoutes = require("./routes/todos");
app.use("/api/todos", todoRoutes);

//launch
app.listen(PORT, () => {
  console.log(`the server in runnin on http://localhost:${PORT}`);
});
