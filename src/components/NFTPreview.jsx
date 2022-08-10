import { Card, Image, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EthereumIcon } from '../asset/icons/ethereum-eth-logo.svg';
import { emptyImg } from '../asset/imgs/entryImg';
import { theme } from '../style/theme';

const { Paragraph } = Typography;

function NFTpreview({ key, NFTData }) {
  return (
    <Link to={`/assets/ethereum/${NFTData.contract_address}`}>
      <Card
        key={key + 1}
        hoverable
        cover={
          <Image
            alt={`nft-card ${NFTData.name}`}
            src={NFTData.image}
            preview={false}
            fallback={emptyImg}
          />
        }
      >
        <Meta
          title={
            <Paragraph ellipsis style={{ fontSize: `${theme.fs_4}` }}>
              {NFTData.name}
            </Paragraph>
          }
          description={
            <>
              <Paragraph ellipsis style={{ fontSize: `${theme.fs_1}` }}>
                {NFTData.collection_name}
              </Paragraph>
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
                  {NFTData.price}
                  {/* <span style={{ fontSize: `${theme.fs_1}` }}>($62,572.41)</span> */}
                </span>
              </p>
            </>
          }
          style={{ width: 'auto', height: '100px' }}
        />
      </Card>
    </Link>
  );
}

export default NFTpreview;
