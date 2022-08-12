import { Avatar, Card, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import { emptyImg } from '../asset/imgs/entryImg';

function CollectionPreview({ collectionData }) {
  return (
    <Link to={`/collection/${collectionData.slug}`}>
      <Card
        key={collectionData.name}
        hoverable
        cover={
          <Image
            alt="collection-card"
            src={collectionData.image_url}
            preview={false}
            fallback={emptyImg}
            height={250}
            style={{ objectFit: 'cover' }}
          />
        }
      >
        <Meta
          avatar={<Avatar shape="square" src={collectionData.image_url} size="large" />}
          title={collectionData.name}

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
