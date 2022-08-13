import { Avatar, Card, Image, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { emptyImg } from '../../asset/imgs/entryImg';

import erc721Abi from '../../erc721Abi';
const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

function MarketPreview({ collectionData, account, web3 }) {
  const buyNft = async () => {
    console.log('hi');

    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });

    console.log(collectionData.tokenId);

    tokenContract.methods.buyNft(collectionData.tokenId).send({
      from: account,
      value: 100,
      gas: 250000,
    });
  };
  return (
    // <Link to={`/collection/${collectionData.slug}`}>
    <Card
      key={collectionData.name}
      hoverable
      cover={
        <Image
          alt="collection-card"
          src={collectionData.collection_banner_img}
          preview={false}
          fallback={emptyImg}
          height={250}
          style={{ objectFit: 'cover' }}
        />
      }
    >
      <Meta
        avatar={<Avatar shape="square" src={collectionData.collection_profile_img} size="large" />}
        title={collectionData.collection_name}
      />
      <br />
      <Button
        type="primary"
        size="large"
        onClick={() => {
          buyNft();
        }}
      >
        구매하기
      </Button>
    </Card>
    // </Link>
  );
}

export default MarketPreview;
