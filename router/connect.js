const express = require("express");
const router = express.Router();
const { saveAccount } = require("./../controller/index");

router.post("/", saveAccount);

module.exports = router;
