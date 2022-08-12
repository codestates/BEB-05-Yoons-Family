const { default: axios } = require('axios');
const db = require('../db');

module.exports = {
  get1: (address, callback) => {
    const queryString = `SELECT token_id, token_img, token_name, token_owner, token_description, token_price FROM NFT WHERE token_owner = ?`;
    const params = [address];

    db.query(queryString, params, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
  get2: (name, callback) => {
    const queryString = `SELECT token_id, token_img, token_name, token_owner, token_description, token_price FROM NFT WHERE token_name = ?`;
    const params = [name];

    db.query(queryString, params, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
  get3: (callback) => {
    const queryString = `SELECT token_id, token_img, token_name, token_owner, token_description, token_price FROM NFT`;

    db.query(queryString, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
  save: (user_account, user_balance, callback) => {
    const queryString = `INSERT INTO Users (user_account, user_balance) VALUES (?, ?)`;
    const params = [user_account, user_balance];

    db.query(queryString, params, (error, result) => {
      console.log(result);
      callback(error, result);
    });
  },
};
