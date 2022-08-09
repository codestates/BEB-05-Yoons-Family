import { Layout, Menu as _Menu, Row, Col } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  BankOutlined,
  GithubOutlined,
  HighlightOutlined,
  RiseOutlined,
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

  const items = [
    {
      label: 'Explore',
      key: 'explore',
      children: [
        {
          label: 'All NFTs',
          key: 'explore-all-nfts',
          icon: <AppstoreOutlined />,
          onClick: () => navigate('/assets'),
        },
        {
          label: 'Art',
          key: 'explore-art',
          icon: <HighlightOutlined />,
          onClick: () => alert('Art'),
        },
        {
          label: 'Collectibles',
          key: 'explore-collectibles',
          icon: <BankOutlined />,
          onClick: () => alert('Collectibles'),
        },
      ],
    },
    {
      label: 'Stats',
      key: 'stats',
      children: [
        {
          label: 'Rankings',
          key: 'stats-rankings',
          icon: <RiseOutlined />,
          onClick: () => alert('rankings'),
        },
        {
          label: 'Activity',
          key: 'stats-activity',
          icon: <SlidersOutlined />,
          onClick: () => alert('activity'),
        },
      ],
    },
    {
      label: 'Resources',
      key: 'resources',
      children: [
        {
          label: 'GitHub Repository',
          key: 'resources-gitHub-repository',
          icon: <GithubOutlined />,
          onClick: () =>
            window.open(
              'https://github.com/codestates/BEB-05-Yoons-Family',
              '_blank'
            ),
        },
      ],
    },
    { label: 'Create', key: 'create' },
    { label: <UserOutlined />, key: 'mypage' },
    {
      label: <WalletOutlined />,
      key: 'wallet',
      onClick: () => setCollapsed(!collapsed),
    },
  ];

  //검색
  const onSearch = (value) => console.log(value);
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col flex="0 1 20%">
          <Link to="/">
            <LogoWrapper>
              <LogoImg
                src={require('../../asset/icons/ethereum.png')}
                alt="logo"
              />
              <LogoTitle> NFT Exchange</LogoTitle>
            </LogoWrapper>
          </Link>
        </Col>
        <Col flex="0 1 55%">
          <Search
            placeholder="Search items, collections, and accounts"
            allowClear
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col flex="0 0 25%">
          <Menu mode="horizontal" items={items} />
        </Col>
      </Row>
    </Header>
  );
}

const Header = styled(_Header)`
  background-color: ${theme.very_light_blue_main};
  padding-top: 15px;
  padding-bottom: 70px;
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
`;
const Menu = styled(_Menu)`
  background-color: ${theme.very_light_blue_main};
  color: ${theme.very_dark_blue_line};
  ${theme.tablet && theme.mobile} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  align-items: center;
  gap: ${theme.space_1};
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: ${theme.fs_13};
`;

const LogoTitle = styled.span`
  font-size: ${theme.fs_6};
  font-weight: ${theme.fw_700};
  letter-spacing: -1px;
  white-space: nowrap;

  /* ${theme.mobile} {
    display: none;
  } */
`;

export default HeaderComponent;
