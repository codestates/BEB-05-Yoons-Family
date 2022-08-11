import { Avatar, Card, Carousel, Col, Image, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import styled from 'styled-components';
import CollectionPreview from '../../components/CollectionPreview ';
import { theme } from '../../style/theme';
import { collectionDataArt } from '../../temp/dummyDataArt';
import { collectionDataTrending } from '../../temp/dummyDataTrending';

function Section3() {
  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={12}>
        <Title style={{ textAlign: 'center' }}>Discover Extraordinary Collect</Title>

        <Carousel autoplay>
          {/* {new Array(4).fill(null).map((_, idx) => {
            return (
              <Card
                key={Symbol('collection').toString()}
                hoverable
                cover={
                  <Image
                    alt="collection-card"
                    src={collectionDataTrending.collection_banner_img}
                    preview={false}
                  />
                }
              >
                <Meta
                  avatar={
                    <Avatar
                      shape="square"
                      src={collectionDataTrending.collection_profile_img}
                      size="large"
                    />
                  }
                  title={collectionDataTrending.collection_name}
                />
              </Card>
            );
          })} */}

          <Card
            key={Symbol('collection').toString()}
            hoverable
            cover={
              <Image
                alt="collection-card"
                src={collectionDataTrending.collection_banner_img}
                preview={false}
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  src={collectionDataTrending.collection_profile_img}
                  size="large"
                />
              }
              title={collectionDataTrending.collection_name}
            />
          </Card>

          <Card
            key={Symbol('collection').toString()}
            hoverable
            cover={
              <Image
                alt="collection-card"
                src={collectionDataArt.collection_banner_img}
                preview={false}
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  shape="square"
                  src={collectionDataArt.collection_profile_img}
                  size="large"
                />
              }
              title={collectionDataArt.collection_name}
            />
          </Card>
        </Carousel>
      </Col>
    </Row>
  );
}

const Title = styled.p`
  font-size: ${theme.fs_10};
  font-weight: ${theme.fw_700};
`;

export default Section3;
