import { Form, Input, Typography, Upload } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;

function InputExternalLink() {
  return (
    <>
      <Title level={3}>External link</Title>
      <Paragraph>
        NFT Exchange will include a link to this URL on this item's detail page, so that users can
        click to learn more about it. You are welcome to link to your own webpage with more details.
      </Paragraph>
      <Form.Item name={'external-link'}>
        <Input placeholder="http://yoursite.io/item/123" size="large" />
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

export default InputExternalLink;
