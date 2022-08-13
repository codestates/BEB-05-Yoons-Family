import { Avatar, Card, Image, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { emptyImg } from '../../asset/imgs/entryImg';

import erc721Abi from '../../erc721Abi';
const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

function MarketPreview({ collectionData, account, web3 }) {
  return (
    <Link
      to={`/assets/buy/ethereum/${contract_addr}/${collectionData.tokenId}`}
      state={{ name: collectionData.collection_name }}
    >
      <Card
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
          avatar={
            <Avatar shape="square" src={collectionData.collection_profile_img} size="large" />
          }
          title={collectionData.collection_name}
        />
      </Card>
    </Link>
  );
}

export default MarketPreview;
