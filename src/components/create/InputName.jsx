import { Form, Input, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title } = Typography;

function InputName({ setName }) {
  return (
    <>
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
    </>
  );
}

const Title = styled(_Title)`
  color: ${theme.very_dark_blue_line} !important;
`;

export default InputName;
