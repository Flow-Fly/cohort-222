require("./config/mongo");
const express = require("express");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

app.listen(3000, () => console.log("👂️ on http://localhost:3000"));
