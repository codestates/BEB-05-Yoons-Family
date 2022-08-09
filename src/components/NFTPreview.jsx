import { Card, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { ReactComponent as EthereumIcon } from '../asset/icons/ethereum-eth-logo.svg';
import { theme } from '../style/theme';

function NFTpreview({ key }) {
  return (
    <Card
      key={key + 1}
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
                <span style={{ fontSize: `${theme.fs_1}` }}>($62,572.41)</span>
              </span>
            </p>
          </>
        }
      />
    </Card>
  );
}

export default NFTpreview;
