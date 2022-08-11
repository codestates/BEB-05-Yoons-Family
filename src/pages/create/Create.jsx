import { PlusOutlined, LoadingOutlined, PoweroffOutlined } from '@ant-design/icons';
import { NFTStorage } from 'nft.storage/dist/bundle.esm.min.js';
import { Button, Col, Divider, Form, Input, Row, Select, Typography, Upload, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { loginNoti } from '../../asset/utils/notification';
import { theme } from '../../style/theme';
import NotAuthorized from '../NotAuthorized';
import erc721Abi from '../../erc721Abi';

const { Title: _Title, Paragraph: _Paragraph } = Typography;

// env에서 컨트랙트 주소를 불러오지 못하는 거 같아 일단은 값을 넣어둠. 변경필요
const contract_addr = '0xDE119864aBb7bfdC4B0a5930286AB88ec33b1eE5';

// console.log("hihi", process.env.NODE_ENV);
console.log('hihi', contract_addr);

//temp function. You can delete this function if you don't need it
const onFinish = (values) => {
  console.log('Success:', values);
};

//temp function. You can delete this function if you don't need it
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  return isJpgOrPng;
};

function Create({ web3, setCollapsed, account }) {
  // const [image, setImage] = useState(null);
  // const [data, setData] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [to, setTo] = useState('');
  const [loadings, setLoadings] = useState([]);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      setImage(info.file.originFileObj);
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const mint = async () => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[1] = true;
      return newLoadings;
    });

    const NFT_STORAGE_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4ZDBCN2IxNmZEMDAzNjA1OUY2ODA2ODBhOTY0Y0Q4RTA1Yzk1NjYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDE0MzgwNzIwNywibmFtZSI6IllPT04gRkFNSUxZIn0.Oc37n9p13TvckSJHSS5mU2vaqs-K0646CIFFnRoqwHE';
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

    const metadata = await client.store({
      name: name,
      description: description,
      image: image,
    });

    const metadataUrl = `https://ipfs.io/ipfs/${metadata.data.image.pathname}`;
    console.log(metadataUrl);

    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });

    console.log('BEFORE MING', account, metadata);
    tokenContract.methods.mintNFT(account, metadata).send({
      from: account,
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[1] = false;
        return newLoadings;
      });
    }, 10);
  };

  useEffect(() => {
    !account && loginNoti();
    setCollapsed(false);
    console.log(account);
  }, []);

  return !account ? (
    <NotAuthorized />
  ) : (
    <Row justify="center" align="middle">
      <Col flex="0 1 800px">
        <Form
          name="create"
          layout="vertical"
          onValuesChange={() => {}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title
            style={{
              textAlign: 'center',
              marginBottom: `${theme.space_7}`,
              fontSize: `${theme.fs_14}`,
              fontWeight: `${theme.fw_700}`,
            }}
          >
            Create New Item
          </Title>
          <Title level={3}>Image, Video, Audio, or 3D Model</Title>
          <Paragraph>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size:
            100 MB
          </Paragraph>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload
              action="/upload.do"
              listType="picture-card"
              rules={[
                {
                  required: true,
                  message: 'This field is required.',
                },
              ]}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              maxCount={1}
            >
              {/* <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div> */}
              {uploadButton}
              {/* {image ? (
                <img
                  src={image}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )} */}
            </Upload>
          </Form.Item>
          <Title level={3}>Name</Title>
          <Form.Item
            name={'name'}
            rules={[
              {
                required: true,
                message: 'This field is required.',
              },
            ]}
          >
            <Input
              placeholder="Item"
              size="large"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>
          <Title level={3}>External link</Title>
          <Paragraph>
            NFT Exchange will include a link to this URL on this item's detail page, so that users
            can click to learn more about it. You are welcome to link to your own webpage with more
            details.
          </Paragraph>
          <Form.Item name={'external-link'}>
            <Input placeholder="http://yoursite.io/item/123" size="large" />
          </Form.Item>
          <Title level={3}>Description</Title>
          <Paragraph>
            The description will be included on the item's detail page underneath its image.
          </Paragraph>
          <Form.Item name={'description'}>
            <TextArea
              rows={4}
              placeholder="Provide a detailed description of your item."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Item>
          <Title level={3}>Collection</Title>
          <Paragraph>This is the collection where your item will appear.</Paragraph>
          <Form.Item name={'collection'}>
            <Select initialvalues={'crypto-punk'} size="large">
              <Select.Option value="crypto-punk">Crypto Punk</Select.Option>
              <Select.Option value="colne-x">Clone X</Select.Option>
            </Select>
          </Form.Item>
          <Title level={3}>Supply</Title>
          <Paragraph>The number of items that can be minted. No gas cost to you!</Paragraph>
          <Form.Item name={'supply'}>
            <Input initialvalues={'1'} size="large" />
          </Form.Item>
          <Title level={3}>Blockchain</Title>
          <Form.Item name="blockchain">
            <Select size="large">
              <Select.Option initialvalues={'ethereum'} value="ethereum" size="large">
                Ethereum
              </Select.Option>
            </Select>
          </Form.Item>
          <Title level={3}>Freeze metadata</Title>
          <Paragraph>
            Freezing your metadata will allow you to permanently lock and store all of this item's
            content in decentralized file storage.
          </Paragraph>
          <Form.Item name="freeze-metadata">
            <Input
              placeholder="To freeze your metadata, you must create item first."
              disabled
              size="large"
            />
          </Form.Item>
          <Divider />
          <Form.Item name="create-button">
            <Button
              type="primary"
              size="large"
              loading={loadings[1]}
              onClick={() => {
                mint();
              }}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

const Paragraph = styled(_Paragraph)`
  color: ${theme.very_dark_blue_line} !important;
`;

export default Create;
