import { Button, Form } from 'antd';
import React from 'react';

function ButtonMint({ loading, onMint }) {
  return (
    <>
      <Form.Item name="create-button">
        <Button
          type="primary"
          size="large"
          loading={loading}
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
