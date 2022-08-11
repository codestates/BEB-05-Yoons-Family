const db = require("../db");

module.exports = {
  get1: (address, callback) => {
    const queryString = `SELECT token_id, image, name, owner, description, price FROM NFT WHERE owner = ?`;
    const params = [address];

    db.query(queryString, params, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
  get2: (name, callback) => {
    const queryString = `SELECT token_id, image, name, owner, description, price FROM NFT WHERE name = ?`;
    const params = [name];

    db.query(queryString, params, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
  get3: (callback) => {
    const queryString = `SELECT token_id, image, name, owner, description, price FROM NFT`;

    db.query(queryString, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
  save: (user_account, user_nickname, user_balance, callback) => {
    const queryString = `INSERT INTO Users (user_account, user_nickname, user_balance) VALUES (?, ?, ?)`;
    const params = [user_account, user_nickname, user_balance];

    db.query(queryString, params, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
};
