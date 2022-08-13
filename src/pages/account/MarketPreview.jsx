import { Avatar, Card, Image, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
// import { Link } from 'react-router-dom';
// import { emptyImg } from '../asset/imgs/entryImg';
import erc721Abi from '../../erc721Abi';
const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

function MyPagePreview({ collectionData, account, web3 }) {
  const buyNft = async () => {
    console.log('hihi');
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });
    console.log('checkcheck', collectionData);
    // tokenContract.methods.buyNft().call({
    //   from: account,
    // });
  };
  return (
    <Card
      key={Symbol('collection').toString()}
      hoverable
      cover={
        <Image alt="collection-card" src={collectionData.collection_banner_img} preview={false} />
      }
    >
      <Meta
        avatar={<Avatar shape="square" src={collectionData.collection_profile_img} size="large" />}
        title={collectionData.collection_name}
      />
      <div>가격</div>
      <Button type="primary" size="large" onClick={() => buyNft()}>
        구매하기
      </Button>
    </Card>
  );
}

export default MyPagePreview;
