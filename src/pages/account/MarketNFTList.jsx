import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import MarketPreview from '../../components/explore/MarketPreview';

function MarketNFTList({ collectionData, account, web3 }) {
  useEffect(() => {}, [collectionData]);
  return (
    <Row gutter={[16, 16]}>
      {collectionData.map((_, idx) => {
        return (
          <Col xs={12} xl={6} key={Symbol(idx + 1).toString()}>
            <MarketPreview
              key={Symbol(idx + 1).toString()}
              collectionData={_}
              account={account}
              web3={web3}
            ></MarketPreview>
          </Col>
        );
      })}
    </Row>
  );
}

export default MarketNFTList;
