import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import { ReactComponent as EthereumIcon } from '../../asset/icons/ethereum-eth-logo.svg';

const { Meta } = Card;

function Section2() {
  return (
    <Wrapper>
      <Title>Get Your NFT</Title>
      <CardWrapper>
        {new Array(8).fill(null).map((_, idx) => {
          return (
            <Card
              key={idx + 1}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
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
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: ${theme.space_4};
  gap: ${theme.space_4};
  flex-wrap: wrap;

  /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); */
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.space_4};
  justify-content: center;
`;

const Title = styled.p`
  font-size: ${theme.fs_10};
  font-weight: ${theme.fw_700};
`;

export default Section2;
