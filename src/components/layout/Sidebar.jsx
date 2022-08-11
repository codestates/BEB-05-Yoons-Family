import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import Sider from 'antd/lib/layout/Sider';
import { theme } from '../../style/theme';
import { ReactComponent as MetamaskIcon } from '../../asset/icons/metamask-icon.svg';
import { Avatar, Card, Col, List as _List, message, Row, Tooltip, Typography } from 'antd';

const { Text } = Typography;

function Sidebar({ collapsed, setCollapsed, connectWallet, account, balance }) {
  return (
    <Sider
      trigger={null}
      reverseArrow={true}
      defaultCollapsed={true}
      collapsible
      collapsed={collapsed}
      collapsedWidth={0}
      width={`${1200 < window.innerWidth ? '400px' : '100%'}`}
      style={{
        maxWidth: '100%',
        position: 'fixed',
        zIndex: 500,
        top: 64,
        right: 0,
        height: '100vh',
        background: `linear-gradient(${theme.very_dark_blue_sub}, ${theme.very_dark_blue_main} )`,
        // boxShadow: `0 1px 2px rgba(0, 0, 0, 0.25)`,
      }}
    >
      {/* 닫기버튼 */}
      <CloseButton onClick={() => setCollapsed(!collapsed)}>
        <CloseOutlined
          style={{
            padding: '2px',
            color: `${theme.white}`,
            fontSize: `28px`,
            classname: 'close-icon',
          }}
        />
      </CloseButton>

      <SidebarWrapper>
        {/* <MetamaskIcon></MetamaskIcon> */}

        {/* 미로그인 상태 */}
        {account === '' ? (
          <Row gutter={[48, 48]}>
            <Col span={22} offset={1}>
              <div
                style={{
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${theme.very_light_blue_main}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: `${theme.space_2}`,
                  }}
                >
                  <Avatar icon={<UserOutlined />} />
                  <Text
                    style={{
                      color: `${theme.very_light_blue_main}`,
                      fontSize: `${theme.fs_8}`,
                      fontWeight: `${theme.fw_500}`,
                    }}
                  >
                    My Wallet
                  </Text>
                </div>
              </div>
              <p
                style={{
                  fontSize: `${theme.fs_5}`,
                  color: `${theme.soft_blue}`,
                  lineHeight: 1,
                  marginTop: '20px',
                }}
              >
                If you don't have a
                <Tooltip
                  placement="bottom"
                  title={
                    'A crypto wallet is an application or hardware device that allows individuals to store and retrieve digital items.'
                  }
                >
                  &nbsp;
                  <span
                    style={{
                      color: `${theme.cyan}`,
                      fontWeight: `${theme.fw_500}`,
                    }}
                  >
                    wallet
                  </span>
                  &nbsp;
                </Tooltip>
                yet, you can select a provider and create one now.
              </p>
              <List
                size="large"
                header={<div>Choose Your Wallet</div>}
                //   footer={<div>Coming Soon More Wallet Support...</div>}
                bordered
                dataSource={['MetaMask']}
                renderItem={(item) => (
                  <WalletList onClick={connectWallet}>
                    <MetamaskIcon width={`${theme.fs_5}`} />
                    &nbsp;
                    {item}
                  </WalletList>
                )}
              />
            </Col>
          </Row>
        ) : (
          <Row gutter={[48, 48]}>
            <Col span={22} offset={1}>
              <div
                style={{
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${theme.very_light_blue_main}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: `${theme.space_2}`,
                  }}
                >
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  <Text
                    style={{
                      color: `${theme.very_light_blue_main}`,
                      fontSize: `${theme.fs_8}`,
                      fontWeight: `${theme.fw_500}`,
                    }}
                  >
                    NEO
                  </Text>
                </div>
                <Tooltip placement="top" title={'COPY'}>
                  <Text
                    onClick={() => {
                      navigator.clipboard.writeText(account);
                      message.success('Copied!');
                    }}
                    style={{
                      color: `${theme.soft_blue}`,
                      fontSize: `${theme.fs_5}`,
                      fontWeight: `${theme.fw_500}`,
                      cursor: 'pointer',
                    }}
                  >
                    {account.length > 10 &&
                      account.substr(0, 6) +
                        '...' +
                        account.substr(account.length - 4, account.length)}
                  </Text>
                </Tooltip>
              </div>
              <Card
                title={'Total balance'}
                headStyle={{
                  color: `${theme.soft_blue}`,
                  display: 'block',
                  textAlign: 'center',
                  borderColor: `${theme.very_dark_blue_line}`,
                }}
                bodyStyle={{
                  color: `${theme.cyan}`,
                  textAlign: 'center',
                  fontSize: `${theme.fs_12}`,
                }}
                style={{
                  margin: '20px 0px 20px 0px',
                  width: '100%',
                  backgroundColor: `${theme.very_dark_blue_main}`,
                  borderColor: `${theme.very_dark_blue_line}`,
                }}
              >
                <p>{Number(balance).toFixed(4)} ETH</p>
              </Card>
            </Col>
          </Row>
        )}
      </SidebarWrapper>
    </Sider>
  );
}

const CloseButton = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${theme.very_dark_blue_sub};
  cursor: pointer;
  transform: translate(0, -100%);

  position: absolute;

  :hover,
  :active {
    background-color: #43546b;
  }
`;

const List = styled(_List)`
  margin: 20px 0px 20px 0px;
  width: 360;
  background-color: ${theme.very_dark_blue_main};
  border-color: ${theme.very_dark_blue_line};
  color: ${theme.soft_blue};

  .ant-list-header {
    border-bottom: 1px solid ${theme.very_dark_blue_line} !important;
  }
`;

const WalletList = styled(List.Item)`
  border-color: ${theme.very_dark_blue_line};
  color: ${theme.soft_blue};
  font-size: ${theme.fs_5};
  font-weight: ${theme.fw_500};
  cursor: pointer;

  :hover,
  :active {
    box-shadow: 0px 0px 1px 3px rgba(0, 255, 247, 0.5);
  }
  :active {
    background-color: ${theme.very_dark_blue_line};
  }
`;

const SidebarWrapper = styled.div``;
export default Sidebar;
