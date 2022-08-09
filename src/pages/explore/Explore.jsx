import React, { useEffect } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';

import CollectionList from './CollectionList';
import { collectionDataTrending } from '../../temp/dummyDataTrending';
import { collectionDataArt } from '../../temp/dummyDataArt';
import { theme } from '../../style/theme';
import { useLocation, useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { TabPane } = Tabs;

function ExploreRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (key) => {
    navigate(key);
  };

  return (
    <>
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

          <Tabs defaultActiveKey={location.pathname} onChange={onChange}>
            <TabPane tab="Trending" key="/assets/all">
              <CollectionList collectionData={collectionDataTrending} />
            </TabPane>
            <TabPane tab="Art" key="/assets/art">
              <CollectionList collectionData={collectionDataArt} />
            </TabPane>
            <TabPane tab="Collectibles" key="/assets/collectibles">
              <CollectionList collectionData={collectionDataTrending} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default ExploreRouter;
