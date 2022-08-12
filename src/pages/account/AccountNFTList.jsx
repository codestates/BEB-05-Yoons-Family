import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CollectionPreview from '../../components/CollectionPreview ';

function AccountNFTList({ collectionData }) {
  return (
    <Row gutter={[16, 16]}>
      {new Array(48).fill(null).map((_, idx) => {
        return (
          <Col xs={12} xl={6} key={Symbol(idx + 1).toString()}>
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

export default AccountNFTList;