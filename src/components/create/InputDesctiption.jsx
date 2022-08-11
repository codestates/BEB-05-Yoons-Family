import { Form, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;
function InputDesctiption({ setDescription }) {
  return (
    <>
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
    </>
  );
}

const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

const Paragraph = styled(_Paragraph)`
  color: ${theme.very_dark_blue_line} !important;
`;

export default InputDesctiption;
