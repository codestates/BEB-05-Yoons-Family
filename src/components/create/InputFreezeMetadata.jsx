import React from 'react';
import { Form, Input, Typography } from 'antd';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;
function InputFreezeMetadata() {
  return (
    <>
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
    </>
  );
}
const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

const Paragraph = styled(_Paragraph)`
  color: ${theme.very_dark_blue_line} !important;
`;
export default InputFreezeMetadata;
