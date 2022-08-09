import { Layout, Menu as _Menu, Row, Col } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  BankOutlined,
  GithubOutlined,
  HighlightOutlined,
  RiseOutlined,
  SlidersOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import { default as _Search } from 'antd/lib/input/Search';
import { ReactComponent as MetamaskIcon } from '../../asset/icons/metamask-icon.svg';

const { Header: _Header } = Layout;

function HeaderComponent() {
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
    {
      label: 'Connet Wallet',
      key: 'wallet',
      icon: (
        <MetamaskIcon
          style={{
            width: `${theme.fs_4}`,
            verticalAlign: '-0.125em',
            display: 'inline-block',
          }}
        />
      ),
      onClick: () => alert('wallet!'),
    },
  ];

  //검색
  const onSearch = (value) => console.log(value);
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col flex="0 1 200px">
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
        <Col flex="0 1 900px">
          <Search
            placeholder="Search items, collections, and accounts"
            allowClear
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col flex="0 1 500px">
          <Menu
            style={{
              backgroundColor: `${theme.very_light_blue_main}`,
              color: `${theme.very_dark_blue_sub}`,
            }}
            mode="horizontal"
            items={items}
          />
        </Col>
      </Row>
    </Header>
  );
}

const Header = styled(_Header)`
  margin-top: 15px;
  background-color: ${theme.very_light_blue_main};
  color: ${theme.very_dark_blue_sub};
`;

const Search = styled(_Search)`
  margin-top: 15px;
  ${theme.mobile} {
    display: none;
  }
`;
const Menu = styled(_Menu)`
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
