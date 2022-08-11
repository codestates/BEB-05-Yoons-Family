import React from 'react';
import { Form, Select, Typography } from 'antd';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title } = Typography;

function SelectBlockchain() {
  return (
    <>
      <Title level={3}>Blockchain</Title>
      <Form.Item name="blockchain">
        <Select size="large" defaultValue={'ethereum'}>
          <Select.Option initialvalues={'ethereum'} value="ethereum" size="large">
            Ethereum
          </Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}

const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

export default SelectBlockchain;
