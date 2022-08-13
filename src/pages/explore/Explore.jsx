import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';

import CollectionList from './CollectionList';
import { collectionDataTrending } from '../../temp/dummyDataTrending';
import { collectionDataArt } from '../../temp/dummyDataArt';
import { theme } from '../../style/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCollectionListAPI } from '../../api/getCollectionList';
import erc721Abi from '../../erc721Abi';
import Axios from 'axios';
import MarketNFTList from '../account/MarketNFTList';

const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

const { Title } = Typography;
const { TabPane } = Tabs;

function ExploreRouter({ web3, account }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collectionList, setCollectionList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const getNFT = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });

    const result = await tokenContract.methods.getMarketList().call();
    console.log(result);
    console.log('==================');
    const metadata = await Promise.all(
      result
        .filter((res) => res.nftTokenURI.startsWith('https://'))
        .map((res) => Axios.get(res.nftTokenURI).then(({ data }) => Object.assign(data, res)))
    );
    const correctMetadata = metadata
      .filter((meta) => meta.image)
      .map((meta) => {
        console.log('meta', meta);
        return {
          collection_key: 'cryptoDickbutts',
          collection_name: meta.description,
          collection_author: 'FCD457',
          collection_profile_img:
            'https://lh3.googleusercontent.com/vw-gp8yUYkQsxQN5xbHrWEhY7rQWQZhIjgO2tvLxu46VY6iwulwWZt5VFS2Q9gy9qJaiJk8QspZs0qaM9z1ODeIyeUUseABOxdfVrC8=s16',
          // collection_background_img:
          //   'https://lh3.googleusercontent.com/BKe5JQV60t_ExHygABrea_2-ZrDTanAZng6sGePzffYJHb7OdTw-G8JqTcOqRzYcAZQIHeZbhSbgoYv6ionrwxkFU6Wb9TKdwUWK-g=h600',
          collection_banner_img: `https://ipfs.io/ipfs/${meta.image.split('//')[1]}`,
          tokenId: meta.nftTokenId,
        };
      });
    console.log('kkkkk', correctMetadata);
    setImageList(correctMetadata);
  };

  useEffect(() => {
    // getNFTList();
    getNFT();
  }, [account]);

  const onChange = (key) => {
    navigate(key);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Title
          style={{
            marginBottom: `${theme.space_7}`,
            fontSize: `${theme.fs_14}`,
            fontWeight: `${theme.fw_700}`,
            color: `${theme.very_dark_blue_line}`,
          }}
        >
          Explore collections
        </Title>

        <Tabs onChange={onChange} activeKey={location.pathname}>
          <TabPane tab="Trending" key="/assets/trending">
            {/* <CollectionList collectionData={imageList} /> */}
            <MarketNFTList web3={web3} account={account} collectionData={imageList} />
          </TabPane>
          <TabPane tab="Art" key="/assets/art">
            <MarketNFTList web3={web3} account={account} collectionData={imageList} />
          </TabPane>
          <TabPane tab="Collectibles" key="/assets/collectibles">
            {/* <MarketNFTList web3={web3} account={account} collectionData={imageList} /> */}
            <CollectionList collectionData={collectionDataTrending} />
          </TabPane>
        </Tabs>
      </Col>
      s
    </Row>
  );
}

export default ExploreRouter;
