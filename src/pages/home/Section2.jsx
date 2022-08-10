import { Card, Col as _Col, Image, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import NFTPreview from '../../components/NFTPreview';
import { theme } from '../../style/theme';

const { Meta } = Card;

function Section2() {
  return (
    <Row justify="center" align="middle">
      <Col flex="0 1 800px">
        <Title style={{ textAlign: 'center' }}>Get Your NFT</Title>
        <Row gutter={[16, 16]}>
          {new Array(8).fill(null).map((_, idx) => {
            return (
              <Col key={Symbol(idx + 1).toString()}>
                <NFTPreview key={Symbol(idx + 1).toString()}></NFTPreview>
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

const Col = styled(_Col)`
  flex: 1 0 calc(100% * (1 / 4));
`;

export default Section2;
