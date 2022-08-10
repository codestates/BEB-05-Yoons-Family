import { Avatar, Card, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EthereumIcon } from '../asset/icons/ethereum-eth-logo.svg';
import { theme } from '../style/theme';

function CollectionPreview({ collectionData }) {
  return (
    <Link to={`/collection/${collectionData.collection_key}`}>
      <Card
        key={Symbol('collection').toString()}
        hoverable
        cover={
          <Image
            alt="collection-card"
            src={collectionData.collection_banner_img}
            preview={false}
          />
        }
      >
        <Meta
          avatar={
            <Avatar
              shape="square"
              src={collectionData.collection_profile_img}
              size="large"
            />
          }
          title={collectionData.collection_name}

          //설명 부분
          // description={
          //   <>
          //     <p style={{ fontSize: `${theme.fs_1}` }}>
          //       CLONE X - X TAKASHI MURAKAMI
          //     </p>
          //     <p>
          //       <EthereumIcon
          //         style={{
          //           width: `${theme.fs_7}`,
          //           height: `${theme.fs_7}`,
          //           verticalAlign: '-0.4em',
          //           display: 'inline-block',
          //         }}
          //       />
          //       <span>
          //         35.01
          //         <span style={{ fontSize: `${theme.fs_1}` }}>($62,572.41)</span>
          //       </span>
          //     </p>
          //   </>
          // }
        />
      </Card>
    </Link>
  );
}

export default CollectionPreview;
