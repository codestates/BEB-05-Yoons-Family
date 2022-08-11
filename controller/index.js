const models = require("../models");

module.exports = {
  findAll: (req, res) => {
    if (req.query.address != undefined) {
      models.get1(req.query.address, (error, result) => {
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
  saveAccount: (req, res) => {
    const { user_account, user_nickname, user_balance } = req.body;
    models.save(user_account, user_nickname, user_balance, (error, result) => {
      if (error) {
        return res.status(500).send("Internal Server Error");
      } else {
        return res.status(201);
      }
    });
  },
};
