import { Col as _Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CollectionPreview from '../../components/CollectionPreview ';

function CollectionList({ collectionData }) {
  return (
    <Row gutter={[16, 16]}>
      {new Array(48).fill(null).map((_, idx) => {
        return (
          <Col key={Symbol(idx + 1).toString()}>
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

const Col = styled(_Col)`
  flex: 1 0 calc(100% * (1 / 4));
`;

export default CollectionList;
