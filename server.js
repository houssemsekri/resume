const express = require("express");

const connect = require("./config/db");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
connect();
app.use(express.json());
app.use("/api", require("./api/houssem"));

app.listen(5000, () => {
  console.log("connected");
});
