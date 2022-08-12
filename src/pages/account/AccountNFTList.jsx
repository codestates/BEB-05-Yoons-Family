import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import CollectionPreview from '../../components/CollectionPreview ';

function AccountNFTList({ collectionData }) {
  useEffect(() => {}, [collectionData]);
  return (
    <Row gutter={[16, 16]}>
      {collectionData.map((_, idx) => {
        return (
          <Col xs={12} xl={6} key={Symbol(idx + 1).toString()}>
            <CollectionPreview
              key={Symbol(idx + 1).toString()}
              collectionData={_}
            ></CollectionPreview>
          </Col>
        );
      })}
    </Row>
  );
}

export default AccountNFTList;
