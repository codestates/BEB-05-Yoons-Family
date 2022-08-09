import { Card, Col, Image, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import { ReactComponent as EthereumIcon } from '../../asset/icons/ethereum-eth-logo.svg';

const { Meta } = Card;

function Section2() {
  return (
    <Row justify="center" align="middle">
      <Col flex="0 1 1000px">
        <Title style={{ textAlign: 'center' }}>Get Your NFT</Title>
        <Row gutter={[16, 16]}>
          {new Array(8).fill(null).map((_, idx) => {
            return (
              <Col flex="1 1 220px" key={idx + 1}>
                <Card
                  key={idx + 1}
                  hoverable
                  cover={
                    <Image
                      alt="nft-card"
                      src="https://img.seadn.io/files/6fc5396c3bf31854e4e1f2785d86fcda.png?fit=max&w=600"
                    />
                  }
                >
                  <Meta
                    title="CloneX #15920"
                    description={
                      <>
                        <p style={{ fontSize: `${theme.fs_1}` }}>
                          CLONE X - X TAKASHI MURAKAMI
                        </p>
                        <p>
                          <EthereumIcon
                            style={{
                              width: `${theme.fs_7}`,
                              height: `${theme.fs_7}`,
                              verticalAlign: '-0.4em',
                              display: 'inline-block',
                            }}
                          />
                          <span>
                            35.01
                            <span style={{ fontSize: `${theme.fs_1}` }}>
                              ($62,572.41)
                            </span>
                          </span>
                        </p>
                      </>
                    }
                  />
                </Card>
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
