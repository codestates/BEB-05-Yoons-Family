const models = require("../models");

module.exports = {
  findAll: (req, res) => {
    if (req.query.account != undefined) {
      models.get1(req.query.account, (error, result) => {
        if (error) {
          return res.status(500).send("Internal Server Error");
        } else {
          return res.status(200).json(result);
        }
      });
    } else if (req.query.name != undefined) {
      models.get2(req.query.name, (error, result) => {
        if (error) {
          return res.status(500).send("Internal Server Error");
        } else {
          return res.status(200).json(result);
        }
      });
    } else {
      models.get3((error, result) => {
        if (error) {
          return res.status(500).send("Internal Server Error");
        } else {
          return res.status(200).json(result);
        }
      });
    }
  },
};
