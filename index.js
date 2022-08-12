const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const exploreRouter = require('./router/explore');
const connectRouter = require('./router/connect');
const openseaRouter = require('./router/opensea');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/explore', exploreRouter);
app.use('/connect', connectRouter);
app.use('/opensea', openseaRouter);

app.get('/', (req, res) => {
  res.status(200).send('NFT Exchange open');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
