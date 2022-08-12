import { Avatar, Card, Carousel, Col, Image, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getNFTAPI } from '../../api/getNFT';
import { emptyImg } from '../../asset/imgs/entryImg';
import { theme } from '../../style/theme';

function Section3() {
  const [NFTList, setNFTList] = useState([]);
  const getNFTList = async () => {
    const response = await getNFTAPI(4);
    setNFTList(response);
  };

  useEffect(() => {
    getNFTList();
  }, []);

  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={14}>
        <Title style={{ textAlign: 'center' }}>Discover Extraordinary Collect</Title>

        <Carousel autoplay style={{ overflow: 'hidden' }}>
          {NFTList.map((NFTData, idx) => {
            return (
              <Card
                key={idx + 1}
                hoverable
                cover={
                  <Image
                    alt="collection-card"
                    src={
                      NFTData.collection.large_image_url
                        ? NFTData.collection.large_image_url
                        : NFTData.collection.image_url
                    }
                    preview={false}
                    fallback={emptyImg}
                    style={{
                      maxHeight: '100%',
                      maxWidth: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                }
              >
                <Meta
                  avatar={
                    <Avatar
                      shape="square"
                      src={NFTData.collection.image_url}
                      size="large"
                      fallback={emptyImg}
                    />
                  }
                  title={NFTData.collection.name}
                />
              </Card>
            );
          })}
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
