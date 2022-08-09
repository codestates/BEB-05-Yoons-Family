const express = require("express");
const router = express.Router();
const { findAll } = require("./../controller/index");

router.get("/", findAll);

module.exports = router;
