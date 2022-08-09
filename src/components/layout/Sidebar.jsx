import { MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import { ReactComponent as MetamaskIcon } from '../../asset/icons/metamask-icon.svg';
import { Avatar, Card, Col, List, Row, Tooltip, Typography } from 'antd';

const { Text } = Typography;

function Sidebar({ collapsed, setCollapsed }) {
  return (
    <Sider
      breakpoint={'xl'}
      trigger={null}
      reverseArrow={true}
      defaultCollapsed={true}
      collapsible
      collapsed={collapsed}
      collapsedWidth={0}
      width={400}
      style={{
        zIndex: 500,
        position: 'fixed',
        top: 85,
        right: 0,
        height: '100vh',
        // backgroundColor: `${theme.very_dark_blue_main}`,
        background: `linear-gradient(${theme.very_dark_blue_sub}, ${theme.very_dark_blue_main} )`,
        // boxShadow: `0 1px 2px rgba(0, 0, 0, 0.25)`,
      }}
    >
      {/* 닫기버튼 */}
      <CloseButton onClick={() => setCollapsed(!collapsed)}>
        <MenuUnfoldOutlined
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
                fontSize: `${theme.fs_6}`,
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
              dataSource={['Meta Mask']}
              renderItem={(item) => (
                <WalletList>
                  <MetamaskIcon width={`${theme.fs_5}`} />
                  &nbsp;
                  {item}
                </WalletList>
              )}
              style={{
                margin: '20px 0px 20px 0px',
                width: 360,
                backgroundColor: `${theme.very_dark_blue_main}`,
                borderColor: `${theme.very_dark_blue_line}`,
                color: `${theme.soft_blue}`,
              }}
            />
          </Col>
        </Row>

        {/* 로그인 상태 */}
        {/* <Row gutter={[48, 48]}>
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
              <Text
                style={{
                  color: `${theme.soft_blue}`,
                  fontSize: `${theme.fs_6}`,
                  fontWeight: `${theme.fw_500}`,
                }}
              >
                0x5A26...Dd9e
              </Text>
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
                width: 360,
                backgroundColor: `${theme.very_dark_blue_main}`,
                borderColor: `${theme.very_dark_blue_line}`,
              }}
            >
              <p>12.23 ETH</p>
            </Card>
          </Col>
        </Row> */}
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
`;

const SidebarWrapper = styled.div``;
export default Sidebar;
