const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const router = express.Router();

app.set("PORT", 3000);

app.use(cors());
app.use(morgan("dev"));

// Router
app.get("/foo", function (req, res) {
  res.status(200).send("hello world")
})

app.listen(app.get("PORT"), function () {
  console.log("Server listen on port 3000");
});
