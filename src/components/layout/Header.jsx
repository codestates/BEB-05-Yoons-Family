import { Layout, Menu as _Menu, Row, Col } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  BankOutlined,
  GithubOutlined,
  HighlightOutlined,
  RiseOutlined,
  SearchOutlined,
  SlidersOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import { default as _Search } from 'antd/lib/input/Search';

const { Header: _Header } = Layout;
function HeaderComponent({ collapsed, setCollapsed }) {
  let navigate = useNavigate();

  //검색
  const onSearch = (value) => console.log(value);
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Header>
          <Row wrap={false} justify={'space-between'} align="middle">
            <Col xs={{ span: 3, pull: 2 }} xl={{ span: 4, pull: 0 }}>
              <Link to="/">
                <LogoWrapper>
                  <LogoImg src={require('../../asset/icons/ethereum.png')} alt="logo" />
                  <LogoTitle> NFT Exchange</LogoTitle>
                </LogoWrapper>
              </Link>
            </Col>
            <Col xs={0} xl={8}>
              <Search
                placeholder="Search items, collections, and accounts"
                allowClear
                size="large"
                onSearch={onSearch}
              />
            </Col>
            <Col xs={{ offset: 17, span: 1 }} lg={1} xl={0}>
              <SearchOutlined />
            </Col>
            <Col xs={{ span: 3, push: 1 }} lg={{ pull: 1 }} xl={{ push: 0, span: 9 }}>
              <Menu mode="horizontal" style={{ justifyContent: 'flex-end' }}>
                <Menu.SubMenu key="explore" title="Explore">
                  <Menu.Item
                    key="explore-trending-nfts"
                    icon={<AppstoreOutlined />}
                    onClick={() => navigate('/assets/trending')}
                  >
                    All NFTs
                  </Menu.Item>
                  <Menu.Item
                    key="explore-art"
                    icon={<HighlightOutlined />}
                    onClick={() => navigate('/assets/art')}
                  >
                    only NFT Exchange
                  </Menu.Item>
                  {/* <Menu.Item
                    key="explore-collectibles"
                    icon={<BankOutlined />}
                    onClick={() => navigate('/assets/collectibles')}
                  >
                    Collectibles
                  </Menu.Item> */}
                </Menu.SubMenu>
                <Menu.SubMenu key="stats" title="Stats">
                  <Menu.Item
                    key="stats-rankings"
                    icon={<RiseOutlined />}
                    onClick={() => alert('coming soon...')}
                  >
                    Rankings
                  </Menu.Item>
                  <Menu.Item
                    key="stats-activity"
                    icon={<SlidersOutlined />}
                    onClick={() => alert('coming soon...')}
                  >
                    Activity
                  </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="resources" title="Resources">
                  <Menu.Item
                    key="resources-gitHub-repository"
                    icon={<GithubOutlined />}
                    onClick={() =>
                      window.open('https://github.com/codestates/BEB-05-Yoons-Family', '_blank')
                    }
                  >
                    GitHub Repository
                  </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="create" onClick={() => navigate('/assets/create')}>
                  Create
                </Menu.Item>
                <Menu.Item
                  key="mypage"
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  <UserOutlined />
                </Menu.Item>
                <Menu.Item key="wallet" onClick={() => setCollapsed(!collapsed)}>
                  <WalletOutlined />
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </Col>
    </Row>
  );
}

const Header = styled(_Header)`
  background-color: ${theme.very_light_blue_main};
  color: ${theme.very_dark_blue_line};
  z-index: 1000;

  a:link,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
    color: ${theme.very_dark_blue_line};
  }
`;

const Search = styled(_Search)`
  margin-top: 15px;

  ${theme.mobile} {
    display: none;
  }
  ${theme.tablet} {
    display: none;
  }
`;
const Menu = styled(_Menu)`
  background-color: ${theme.very_light_blue_main};
  color: ${theme.very_dark_blue_line};
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const LogoImg = styled.img`
  display: inline-block;
  width: ${theme.fs_13};
  height: ${theme.fs_13};
`;

const LogoTitle = styled.span`
  font-size: ${theme.fs_6};
  font-weight: ${theme.fw_700};
  letter-spacing: -1px;
  white-space: nowrap;

  /* ${theme.mobile} {
    display: none;
  } */
  /* ${theme.tablet} {
    display: none;
  } */
`;

export default HeaderComponent;
