import { Form, Select, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;

function SelectCollection({ setCollection }) {
  return (
    <>
      <Title level={3}>Collection</Title>
      <Paragraph>This is the collection where your item will appear.</Paragraph>
      <Form.Item name={'collection'}>
        <Select
          initialvalues={'crypto-punk'}
          size="large"
          onSelect={(e) => {
            setCollection(e);
          }}
        >
          <Select.Option value="crypto-punk">Crypto Punk</Select.Option>
          <Select.Option value="colne-x">Clone X</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}
const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

const Paragraph = styled(_Paragraph)`
  color: ${theme.very_dark_blue_line} !important;
`;

export default SelectCollection;
