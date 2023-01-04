const express = require("express");
const router = express.Router();
const joinusController = require("../controllers/joinusController");

router.post("/joinus", joinusController);

module.exports = router;
