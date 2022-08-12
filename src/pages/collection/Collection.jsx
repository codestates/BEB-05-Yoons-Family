import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Divider, Layout as _Layout, Menu as _Menu, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCollectionDatailsAPI } from '../../api/getCollectionList';
import NFTPreview from '../../components/NFTPreview';
import { theme } from '../../style/theme';
import Notfound from '../Notfound';

const { Title: _Title, Paragraph, Text } = Typography;
const { Header, Content, Sider: _Sider } = _Layout;

function Collection() {
  const navigate = useNavigate();
  const location = useLocation();

  const [ellipsis, setEllipsis] = useState(true);
  const [NFTList, setNFTList] = useState([]);

  const getNFTList = async () => {
    const slug = location.pathname.split('/')[2];
    const response = await getCollectionDatailsAPI(slug);
    console.log(response);
    setNFTList(response);
  };
  useEffect(() => {
    getNFTList();
  }, []);

  return (
    <Row justify="center" align="middle" style={{ marginTop: '-15vh' }}>
      <Col span={24}>
        <CollentionBackgound src={NFTList[0]?.collection?.banner_image_url}></CollentionBackgound>
        <CollentionProfileImg src={NFTList[0]?.collection?.image_url}></CollentionProfileImg>
        <Title>{NFTList[0]?.collection?.name}</Title>
        <Author>
          By{' '}
          <span>
            <strong>{NFTList[0]?.collection?.name}</strong>
          </span>
        </Author>
        <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
          {NFTList[0]?.collection?.description}
        </Paragraph>
        <Divider />
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['statuts']}>
              {/* 기본 메뉴 */}
              <Menu.SubMenu key="statuts" title="Statuts">
                <Menu.Item key="statuts-buy-now">Buy Now</Menu.Item>
                <Menu.Item key="statuts-on-auction">On Auction</Menu.Item>
                <Menu.Item key="statuts-buy-with-card">Buy with Card</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="price" title="Price">
                <Menu.Item key="price-sub">-</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="quantity" title="Quantity">
                <Menu.Item key="quantity-all-items">All items</Menu.Item>
                <Menu.Item key="quantity-single-items">Single items</Menu.Item>
                <Menu.Item key="quantity-bundles">Bundles</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="currency" title="Currency">
                <Menu.Item key="currency-eth">ETH</Menu.Item>
              </Menu.SubMenu>
              <Divider />
              {/* 속성 */}
              <Menu.SubMenu key="background" title="Background">
                <Menu.Item key="two">-</Menu.Item>
                <Menu.Item key="three">-</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Row gutter={[16, 16]}>
            {NFTList.map((NFTData, idx) => {
              return (
                <Col xs={12} xl={6} key={Symbol(idx + 1).toString()}>
                  <NFTPreview key={Symbol(idx + 1).toString()} NFTData={NFTData}></NFTPreview>
                </Col>
              );
            })}
          </Row>
        </Layout>
      </Col>
    </Row>
  );
}

const CollentionBackgound = styled.img`
  width: 100%;
  height: auto;
`;

const CollentionProfileImg = styled.img`
  width: 10vw;
  height: auto;
  padding: ${theme.space_1};
  background-color: ${theme.white};
  /* border-radius: ${theme.radius_10}; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  transform: translate(50%, -50%);
`;

const Title = styled.p`
  margin-top: -4vh;
  margin-bottom: ${theme.space_1};
  font-size: ${theme.fs_14};
  font-weight: ${theme.fw_700};
  color: ${theme.very_dark_blue_line};
`;
const Author = styled.p`
  font-size: ${theme.fs_8};
`;

const Layout = styled(_Layout)`
  background-color: rgba(0, 0, 0, 0);

  .ant-layout-sider-children {
    height: 100vh;
    overflow: auto;
  }
`;

//메뉴
const Sider = styled(_Sider)`
  background-color: rgba(0, 0, 0, 0);
`;
const Menu = styled(_Menu)`
  background-color: rgba(0, 0, 0, 0);
`;
export default Collection;
