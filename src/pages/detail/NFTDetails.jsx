import {
  Button,
  Card,
  Col,
  Collapse,
  Empty,
  Image,
  Row,
  Space,
  Table,
  Tooltip,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as EthereumIcon } from '../../asset/icons/ethereum-eth-logo.svg';
import { theme } from '../../style/theme';
import {
  AlignLeftOutlined,
  ClockCircleOutlined,
  ProfileOutlined,
  StockOutlined,
  TagFilled,
  TagsFilled,
  UnorderedListOutlined,
  WalletFilled,
  ZoomInOutlined,
} from '@ant-design/icons';
import { loginWarningNoti } from '../../asset/utils/notification';
import { getNFTDetailAPI } from '../../api/getNFT';

const { Panel } = Collapse;
const { Title, Text, Paragraph } = Typography;

const columns = [
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => (
      <>
        <EthereumIcon
          style={{
            height: `${theme.fs_5}`,
            width: `${theme.fs_5}`,
            verticalAlign: 'middle',
          }}
        />{' '}
        {text}
      </>
    ),
  },
  {
    title: 'Expiration',
    dataIndex: 'expiration',
    key: 'expiration',
    render: (text) => <Paragraph ellipsis>{text}</Paragraph>,
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
    render: (text) => <Paragraph ellipsis>{text}</Paragraph>,
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    price: `${(Math.random() * 10 + 1).toFixed(3)} ETH`,
    expiration: `${(1 + i).toFixed()} minutes ago`,
    from: `0x5A2609D698DE041B1Ba77139A4229c8a161dDd9e`,
  });
}

const onChange = (key) => {
  console.log(key);
};

function NFTDetails({ web3, setCollapsed, account }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [NFTName, setNFTName] = useState('');
  const [NFTImg, setNFTImg] = useState('');
  const [NFTDescription, setNFTDescription] = useState('');
  const [NFTCollectionName, setNFTCollectionName] = useState('');

  const tx_id = location.pathname.split('/')[3];
  const token_id = location.pathname.split('/')[4];

  const getNFTList = async () => {
    const response = await getNFTDetailAPI(tx_id, token_id);
    setNFTName(response.name);
    setNFTImg(response.image_url);
    setNFTDescription(response.description);
    setNFTCollectionName(response.collection.name);
  };

  useEffect(() => {
    getNFTList();
  }, []);

  const onBuyNow = () => {
    !account && setCollapsed(false);
    !account && loginWarningNoti();
  };

  const onMakeOffer = () => {
    !account && setCollapsed(false);
    !account && loginWarningNoti();
  };

  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={16}>
        {/* Header */}
        <Title level={1}>{NFTName}</Title>

        {/* // NFT image Box  */}
        <Row gutter={[8, 8]} type="flex">
          <Col flex={'1 1 50%'}>
            <Card
              size="small"
              title={
                <Tooltip title="Blockchain: Ethereum">
                  <EthereumIcon
                    style={{
                      height: `${theme.fs_5}`,
                      width: `${theme.fs_5}`,
                      verticalAlign: 'middle',
                    }}
                  />
                </Tooltip>
              }
              bodyStyle={{ textAlign: 'center' }}
            >
              <Image src={NFTImg} alt={`${NFTName}`} style={{ width: '100%' }} />
            </Card>
          </Col>
          {/* Order Box */}
          <Col flex={'1 1 50%'}>
            <Card
              title={
                <>
                  <ClockCircleOutlined /> Sale ends August 16, 2022 at 2:32am GMT+9
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text type="secondary">Current price</Text>
                <Space>
                  <EthereumIcon
                    style={{
                      height: `${theme.fs_11}`,
                      width: `${theme.fs_11}`,
                    }}
                  />
                  <Title level={2}>2.543 ETH</Title>
                </Space>
                <Button type="primary" size="large" style={{ width: '100%' }} onClick={onBuyNow}>
                  <WalletFilled /> Buy Now
                </Button>
                <Button size="large" style={{ width: '100%' }} onClick={onMakeOffer}>
                  <TagFilled /> Make offer
                </Button>
              </Space>
            </Card>
            {/* Price Box */}
            <Collapse expandIconPosition={'end'} onChange={onChange}>
              <Panel
                header={
                  <>
                    <StockOutlined /> Price History
                  </>
                }
                key="1"
              >
                <Empty />
              </Panel>
            </Collapse>
            {/* Listings Box */}
            <Collapse expandIconPosition={'end'} onChange={onChange}>
              <Panel
                header={
                  <>
                    <TagFilled /> Listings
                  </>
                }
                key="1"
              >
                <Empty />
              </Panel>
            </Collapse>
            {/* Offers Box */}
            <Collapse defaultActiveKey={['1']} expandIconPosition={'end'} onChange={onChange}>
              <Panel
                header={
                  <>
                    <UnorderedListOutlined /> Offers
                  </>
                }
                key="1"
              >
                {/* <Empty /> */}
                <Table
                  width="100%"
                  columns={columns}
                  dataSource={data}
                  pagination={{
                    pageSize: 50,
                  }}
                  scroll={{
                    y: 240,
                  }}
                />
              </Panel>
            </Collapse>
          </Col>
          {/* Description */}
          <Col flex={'1 1 50%'}>
            <Collapse defaultActiveKey={['1', '2']} onChange={onChange} expandIconPosition={'end'}>
              <Panel
                header={
                  <>
                    <AlignLeftOutlined /> Description
                  </>
                }
                key="1"
              >
                {NFTDescription}
              </Panel>
              <Panel
                header={
                  <>
                    <TagsFilled /> Properties
                  </>
                }
                key="2"
              >
                <Empty />
              </Panel>
              <Panel
                header={
                  <>
                    <ProfileOutlined /> About {NFTCollectionName}
                  </>
                }
                key="3"
              >
                <Empty />
              </Panel>
              <Panel
                header={
                  <>
                    <ZoomInOutlined /> Details
                  </>
                }
                key="4"
              >
                <Empty />
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default NFTDetails;
