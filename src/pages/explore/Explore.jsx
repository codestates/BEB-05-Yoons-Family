import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';

import CollectionList from './CollectionList';
import { collectionDataTrending } from '../../temp/dummyDataTrending';
import { collectionDataArt } from '../../temp/dummyDataArt';
import { theme } from '../../style/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCollectionListAPI } from '../../api/getCollectionList';

const { Title } = Typography;
const { TabPane } = Tabs;

function ExploreRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const [collectionList, setCollectionList] = useState([]);
  const getNFTList = async () => {
    const response = await getCollectionListAPI(100);
    setCollectionList(response);
  };

  useEffect(() => {
    getNFTList();
  }, []);

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
            <CollectionList collectionData={collectionList} />
          </TabPane>
          <TabPane tab="Art" key="/assets/art">
            <CollectionList collectionData={collectionList} />
          </TabPane>
          <TabPane tab="Collectibles" key="/assets/collectibles">
            <CollectionList collectionData={collectionList} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

export default ExploreRouter;
