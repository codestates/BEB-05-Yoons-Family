import React, { useEffect } from 'react';
import { Col, Row, Tabs, Typography } from 'antd';

import { theme } from '../../style/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import NotAuthorized from '../NotAuthorized';
import { loginWarningNoti } from '../../asset/utils/notification';
const { Title } = Typography;

function AccountRouter({ web3, setCollapsed, account }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !account && loginWarningNoti();
    !account && setCollapsed(false);
  }, []);

  const onChange = (key) => {
    navigate(key);
  };

  return !account ? (
    <NotAuthorized />
  ) : (
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
