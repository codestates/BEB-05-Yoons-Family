import React, { useEffect } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';

import { theme } from '../../style/theme';
import { useLocation, useNavigate } from 'react-router-dom';

const { Title } = Typography;

function AccountRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (key) => {
    navigate(key);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Title
          style={{
            marginBottom: `${theme.space_7}`,
            fontSize: `${theme.fs_14}`,
            fontWeight: `${theme.fw_700}`,
            color: `${theme.very_dark_blue_line}`,
          }}
        >
          MY NFT List
        </Title>

        <Tabs onChange={onChange} activeKey={location.pathname}></Tabs>
      </Col>
    </Row>
  );
}

export default AccountRouter;
