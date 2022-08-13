import { Avatar, Card, Image, Button, Space, Input } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { emptyImg } from '../asset/imgs/entryImg';
import { useState } from 'react';

import erc721Abi from '.././erc721Abi';
const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

function CollectionPreview({ collectionData, account, web3 }) {
  const [address, setAddress] = useState('');

  const addToMaket = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });
    console.log(tokenContract);
    tokenContract.methods.setApprovalForAll(contract_addr, 'true').send({
      from: account,
    });
    tokenContract.methods.addToMarket(collectionData.tokenId, '100').send({
      from: account,
      gas: 210000,
    });
  };

  const transfer = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });
    console.log('hihihihi', tokenContract);
    console.log(address);
    tokenContract.methods.transferFrom(account, address, collectionData.tokenId).send({
      from: account,
      gas: 210000,
    });
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Link to={`/collection/${collectionData.slug}`}>
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
          avatar={
            <Avatar shape="square" src={collectionData.collection_profile_img} size="large" />
          }
          title={collectionData.collection_name}
          tokenId={collectionData.tokenId}
        />
        <br />
        <Space style={{ width: '100%' }}>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              addToMaket();
            }}
          >
            마켓에 등록
          </Button>
          <Input
            placeholder="선물 받는 계정"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Button
            type="primary"
            size="large"
            onClick={() => {
              transfer();
            }}
          >
            선물하기
          </Button>
        </Space>
      </Card>
    </Link>
  );
}

export default CollectionPreview;
