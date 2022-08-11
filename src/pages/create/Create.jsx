import { PlusOutlined, LoadingOutlined, PoweroffOutlined } from '@ant-design/icons';
import { NFTStorage } from 'nft.storage/dist/bundle.esm.min.js';
import { Col, Divider, Form, Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { loginNoti } from '../../asset/utils/notification';
import NotAuthorized from '../NotAuthorized';
import erc721Abi from '../../erc721Abi';
import * as CreateComp from '../../components/create';

const contract_addr = process.env.CONTRACT_ADDRESS;
const NFT_STORAGE_TOKEN = process.env.NFT_STORAGE_TOKEN;

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
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [to, setTo] = useState('');
  const [loadings, setLoadings] = useState([]);

  useEffect(() => {
    !account && loginNoti();
    !account && setCollapsed(false);
  }, []);

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
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

<<<<<<< HEAD
  const mint = async () => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[1] = true;
      return newLoadings;
    });
=======
  //민팅
  const onMint = async () => {
    console.log('upload');
>>>>>>> 4fb2ccbf50d72b4c34564c9051fd9fdb17e50998

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
<<<<<<< HEAD
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
=======
          <CreateComp.CreatePageTitle />
          <CreateComp.UploadImage
            beforeUpload={beforeUpload}
            handleChange={handleChange}
            image={image}
            uploadButton={uploadButton}
          />
          <CreateComp.InputName setName={setName} />
          <CreateComp.InputExternalLink />
          <CreateComp.InputDesctiption setDescription={setDescription} />
          <CreateComp.SelectCollection />
          <CreateComp.InputSupply />
          <CreateComp.SelectBlockchain />
          <CreateComp.InputFreezeMetadata />
          <Divider />
          <CreateComp.ButtonMint onMint={onMint} />
>>>>>>> 4fb2ccbf50d72b4c34564c9051fd9fdb17e50998
        </Form>
      </Col>
    </Row>
  );
}

export default Create;
