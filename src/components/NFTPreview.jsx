import { Card, Image, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as EthereumIcon } from '../asset/icons/ethereum-eth-logo.svg';
import { emptyImg } from '../asset/imgs/entryImg';
import { theme } from '../style/theme';

const { Paragraph } = Typography;

function NFTpreview({ NFTData }) {
  const location = useLocation();
  return (
    <Link to={`/assets/ethereum/${NFTData.asset_contract.address}/${NFTData.token_id}`}>
      <Card
        key={NFTData.token_id}
        hoverable
        cover={
          <div>
            <Image
              alt={`nft-card ${NFTData.name}`}
              src={NFTData.image_url ? NFTData.image_url : emptyImg}
              preview={false}
              fallback={emptyImg}
              style={{ justifyContent: 'center' }}
            />
          </div>
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
                {NFTData.collection.name}
              </Paragraph>
              {location.path === '/' && (
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
              )}
            </>
          }
          style={{ width: 'auto', height: '100px' }}
        />
      </Card>
    </Link>
  );
}

export default NFTpreview;
