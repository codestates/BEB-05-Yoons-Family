import { Card, Col, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getNFTWithSlugAPI } from '../../api/getNFT';
import NFTPreview from '../../components/NFTPreview';
import { theme } from '../../style/theme';

function Section2() {
  const [NFTList, setNFTList] = useState([]);
  const getNFTList = async () => {
    const response = await getNFTWithSlugAPI(8, 'meta-kongz-official');
    setNFTList(response);
  };
  useEffect(() => {
    getNFTList();
  }, []);

  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={14}>
        <Title style={{ textAlign: 'center' }}>Get Your NFT</Title>
        <Row gutter={[16, 16]}>
          {NFTList.map((NFTData, idx) => {
            return (
              <Col xs={12} xl={6} key={Symbol(idx + 1).toString()}>
                <NFTPreview key={Symbol(idx + 1).toString()} NFTData={NFTData}></NFTPreview>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

const Title = styled.p`
  font-size: ${theme.fs_10};
  font-weight: ${theme.fw_700};
`;

export default Section2;
