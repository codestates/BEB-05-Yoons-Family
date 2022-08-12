const express = require('express');
const router = express.Router();
const { findNFT } = require('./../controller/index');

router.get('/', findNFT);

module.exports = router;
