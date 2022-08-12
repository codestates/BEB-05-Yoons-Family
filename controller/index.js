const models = require('../models');
const axios = require('axios');

module.exports = {
  findAll: (req, res) => {
    if (req.query.address != undefined) {
      models.get1(req.query.address, (error, result) => {
        if (error) {
          return res.status(500).send('Internal Server Error');
        } else {
          return res.status(200).json(result);
        }
      });
    } else if (req.query.name != undefined) {
      models.get2(req.query.name, (error, result) => {
        if (error) {
          return res.status(500).send('Internal Server Error');
        } else {
          return res.status(200).json(result);
        }
      });
    } else {
      models.get3((error, result) => {
        if (error) {
          return res.status(500).send('Internal Server Error');
        } else {
          return res.status(200).json(result);
        }
      });
    }
  },
  saveAccount: (req, res) => {
    const { user_account, user_balance } = req.body;
    console.log(req.body);
    models.save(user_account, user_balance, (error, result) => {
      if (error) {
        return res.status(500).send('Internal Server Error');
      } else {
        return res.status(201).json({ message: 'success!' });
      }
    });
  },
  findNFT: async (req, res) => {
    if (req.query.limit != undefined) {
      const nftList = await axios
        .get(
          `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=${req.query.limit}`,
          {
            headers: {
              'x-api-key': '',
            },
          }
        )
        .then((response) => response.data.assets);
      console.log(nftList);
      return res.status(200).json(nftList);
    } else if (req.query.contractaddress != undefined && req.query.tokenId != undefined) {
      const nftList = await axios
        .get(
          `https://api.opensea.io/api/v1/asset/${req.query.contractaddress}/${req.query.tokenId}`,
          {
            headers: {
              'x-api-key': '',
            },
          }
        )
        .then((response) => response.data);

      return res.status(200).json(nftList);
    } else if (req.query.collecionslug != undefined) {
      const collections = await axios
        .get(`https://api.opensea.io/api/v1/collection/${req.query.collecionslug}`, {
          headers: {
            'x-api-key': '',
          },
        })
        .then((response) => response.data.collection);
      console.log(collections);
      return res.status(200).json(collections);
    } else if (req.query.collectionoffset != undefined && req.query.collectionlimit != undefined) {
      const collections = await axios
        .get(
          `https://api.opensea.io/api/v1/collections?offset=${req.query.collectionoffset}&limit=${req.query.collectionlimit}`,
          {
            headers: {
              'x-api-key': '',
            },
          }
        )
        .then((response) => response.data.collections);
      console.log(collections);
      return res.status(200).json(collections);
    }
  },
};
