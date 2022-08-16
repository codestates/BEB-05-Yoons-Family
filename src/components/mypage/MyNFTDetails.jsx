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
  Input,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
import erc721Abi from '../../erc721Abi';
import Axios from 'axios';
const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

// import { getNFTDetailAPI } from '../../api/getNFT';

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

function MyNFTDetails({ web3, setCollapsed, account, name }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pa = useParams();

  const [NFTName, setNFTName] = useState('');
  const [NFTImg, setNFTImg] = useState('');
  const [NFTDescription, setNFTDescription] = useState('');
  const [NFTCollectionName, setNFTCollectionName] = useState('');
  const [currentPrice, setCurrentPrice] = useState('0');

  const getgetNFTList = async () => {
    console.log('GET GET START');
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });
    const result = await tokenContract.methods.getNftTokens(account).call({ from: account });

    const result2 = await tokenContract.methods.getMarketList().call();
    setCurrentPrice(result2[pa.token_id - 1].price);

    const metadata = await Promise.all(
      result
        .filter((res) => res.nftTokenId === pa.token_id)
        .map((res) => Axios.get(res.nftTokenURI).then(({ data }) => Object.assign(data, res)))
    );

    const correctMetadata = metadata
      .filter((meta) => meta.image)
      .map((meta) => {
        return {
          nft_name: meta.name,
          nft_img: `https://ipfs.io/ipfs/${meta.image.split('//')[1]}`,
          nft_desc: meta.description,
        };
      });

    console.log(correctMetadata[0].nft_name);

    setNFTName(correctMetadata[0].nft_name);
    setNFTImg(correctMetadata[0].nft_img);
    setNFTDescription(correctMetadata[0].nft_desc);
  };

  useEffect(() => {
    getgetNFTList();
  }, [account]);

  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');

  const onMakeOffer = async () => {
    !account && setCollapsed(false);
    !account && loginWarningNoti();
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });

    console.log(pa.token_id, '----------');
    tokenContract.methods.addToMarket(pa.token_id, price).send({
      from: account,
      gas: 210000,
    });
  };

  const onSendGift = async () => {
    !account && setCollapsed(false);
    !account && loginWarningNoti();
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });
    console.log('HEHEHEHEH', address);
    tokenContract.methods.transferFrom(account, address, pa.token_id).send({
      from: account,
      gas: 210000,
    });
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
                  <Title level={2}>{currentPrice} Wei</Title>
                </Space>
                <Input
                  placeholder="선물 받는 계정"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <Button type="primary" size="large" style={{ width: '100%' }} onClick={onSendGift}>
                  <WalletFilled /> 선물하기
                </Button>
                <Input
                  placeholder="판매하길 원하는 가격을 입력해주세요."
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
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

export default MyNFTDetails;
