import { Button, Form } from 'antd';
import React from 'react';

function ButtonMint({ onMint, loadings }) {
  return (
    <>
      <Form.Item name="create-button">
        <Button
          type="primary"
          size="large"
          onClick={() => {
            onMint();
          }}
        >
          Create
        </Button>
      </Form.Item>
    </>
  );
}

export default ButtonMint;
