import { Typography } from 'antd';
import React from 'react';
import { theme } from '../../style/theme';

const { Title } = Typography;

function CreatePageTitle() {
  return (
    <>
      <Title
        style={{
          textAlign: 'center',
          marginBottom: `${theme.space_7}`,
          fontSize: `${theme.fs_14}`,
          fontWeight: `${theme.fw_700}`,
          color: `${theme.very_dark_blue_line}`,
        }}
      >
        Create New Item
      </Title>
    </>
  );
}

export default CreatePageTitle;
