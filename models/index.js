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
  saveAccount: (user_account, user_balance, chain, callback) => {
    const getAccount = `SELECT user_account FROM Users WHERE user_account = "${user_account}" AND user_chain = "${chain}"`;
    const updateAccount = `UPDATE Users SET user_account="${user_account}", user_balance="${user_balance}", user_chain="${chain}" WHERE user_account="${user_account}" AND user_chain="${chain}"`;

    const insertAccount = `INSERT INTO Users (user_account, user_balance, user_chain) VALUES ("${user_account}","${user_balance}" , "${chain}")`;

    db.query(getAccount, (error, result) => {
      isAccount = JSON.stringify(result);
      console.log(isAccount);
      if (isAccount === '[]') {
        db.query(insertAccount, (error, result) => {
          callback(error, result);
        });
      } else {
        db.query(updateAccount, (error, result) => {
          callback(error, result);
        });
      }
    });
  },
};
