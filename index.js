const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(express.json());
const PORT = process.env.PORT || 4001;
app.use(cors());

const contactRoute = require("./routes/contactRoute");
const joinUsRoute = require("./routes/joinUsRoute");
const registrationRoute = require("./routes/registrationRoute");

app.get("/", (req, res) => {
  res.send("3a Learning Solutions Server is Working!");
});

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});

app.use(contactRoute, joinUsRoute, registrationRoute);
