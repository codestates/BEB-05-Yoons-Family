const express = require('express');
const router = express.Router();
const { findNFT, findWantedNFT } = require('./../controller/index');

router.get('/', findNFT);
router.get('/onlycollections', findWantedNFT);

module.exports = router;
