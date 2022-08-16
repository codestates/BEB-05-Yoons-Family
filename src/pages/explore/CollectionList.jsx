import { Col, Row } from 'antd';
import React from 'react';
import CollectionPreview from '../../components/CollectionPreview';

function CollectionList({ collectionData }) {
  return (
    <Row gutter={[16, 16]}>
      {collectionData.map((collecion, idx) => {
        if (collecion.image_url) {
          return (
            <Col xs={12} xl={6} key={Symbol(idx + 1).toString()}>
              <CollectionPreview
                key={Symbol(idx + 1).toString()}
                collectionData={collecion}
              ></CollectionPreview>
            </Col>
          );
        }
      })}
    </Row>
  );
}

export default CollectionList;
