import { Col, Row } from 'antd';
import React from 'react';
import CollectionPreview from '../../components/CollectionPreview ';

function CollectionList({ collectionData }) {
  return (
    <Row gutter={[16, 16]}>
      {new Array(48).fill(null).map((_, idx) => {
        return (
          <Col flex="1 0 25%" key={Symbol(idx + 1).toString()}>
            <CollectionPreview
              key={Symbol(idx + 1).toString()}
              collectionData={collectionData}
            ></CollectionPreview>
          </Col>
        );
      })}
    </Row>
  );
}

export default CollectionList;
