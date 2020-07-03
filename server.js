const express = require("express");
const path = require("path");
const connect = require("./config/db");
const cors = require("cors");
const env = require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
connect();
app.use(express.json());
app.use("/api", require("./api/houssem"));
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("connected");
});
