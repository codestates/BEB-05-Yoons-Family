import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  notification,
  Row,
  Select,
  Typography,
  Upload,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { loginNoti } from '../../asset/utils/notification';
import { theme } from '../../style/theme';
import NotAuthorized from '../NotAuthorized';

const { Title: _Title, Paragraph: _Paragraph } = Typography;

//temp function. You can delete this function if you don't need it
const onFinish = (values) => {
  console.log('Success:', values);
};

//temp function. You can delete this function if you don't need it
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Create({ web3, setCollapsed, account }) {
  useEffect(() => {
    !account && loginNoti();
    setCollapsed(false);
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
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </Paragraph>
          <Form.Item
            valuePropName="fileList"
            name={'upload'}
            rules={[{ required: true, message: 'This field is required.' }]}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Title level={3}>Name</Title>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'This field is required.' }]}
          >
            <Input placeholder="Item" size="large" />
          </Form.Item>
          <Title level={3}>External link</Title>
          <Paragraph>
            NFT Exchange will include a link to this URL on this item's detail
            page, so that users can click to learn more about it. You are
            welcome to link to your own webpage with more details.
          </Paragraph>
          <Form.Item name={'external-link'}>
            <Input placeholder="http://yoursite.io/item/123" size="large" />
          </Form.Item>
          <Title level={3}>Description</Title>
          <Paragraph>
            The description will be included on the item's detail page
            underneath its image.
          </Paragraph>
          <Form.Item name={'description'}>
            <TextArea
              rows={4}
              placeholder="Provide a detailed description of your item."
            />
          </Form.Item>
          <Title level={3}>Collection</Title>
          <Paragraph>
            This is the collection where your item will appear.
          </Paragraph>
          <Form.Item name={'collection'}>
            <Select defaultValue={'crypto-punk'} size="large">
              <Select.Option value="crypto-punk">Crypto Punk</Select.Option>
              <Select.Option value="colne-x">Clone X</Select.Option>
            </Select>
          </Form.Item>
          <Title level={3}>Supply</Title>
          <Paragraph>
            The number of items that can be minted. No gas cost to you!
          </Paragraph>
          <Form.Item name={'supply'}>
            <Input defaultValue={'1'} size="large" />
          </Form.Item>
          <Title level={3}>Blockchain</Title>
          <Form.Item name="blockchain">
            <Select size="large">
              <Select.Option
                defaultValue={'ethereum'}
                value="ethereum"
                size="large"
              >
                Ethereum
              </Select.Option>
            </Select>
          </Form.Item>
          <Title level={3}>Freeze metadata</Title>
          <Paragraph>
            Freezing your metadata will allow you to permanently lock and store
            all of this item's content in decentralized file storage.
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
            <Button type="primary" size="large">
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
