import React from 'react';
import { Form, Input, Typography } from 'antd';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;

function InputSupply() {
  return (
    <>
      <Title level={3}>Supply</Title>
      <Paragraph>The number of items that can be minted. No gas cost to you!</Paragraph>
      <Form.Item name={'supply'}>
        <Input size="large" defaultValue={'1'} />
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

export default InputSupply;
