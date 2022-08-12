import { Form, Typography, Upload } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

const { Title: _Title, Paragraph: _Paragraph } = Typography;

function UploadImage({ beforeUpload, handleChange, image, uploadButton }) {
  return (
    <>
      <Title level={3}>Image, Video, Audio, or 3D Model</Title>
      <Paragraph>
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100
        MB
      </Paragraph>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload
          action="/upload.do"
          listType="picture-card"
          rules={[
            {
              required: true,
              message: 'This field is required.',
            },
          ]}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          maxCount={1}
        >
          {/* <div>
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            Upload
                        </div>
                    </div> */}
          {/* {image ? (
            <img
              src={image}
              alt="avatar"
              style={{
                width: '100%',
              }}
            />
          ) : (
            uploadButton
          )} */}
          {uploadButton}
        </Upload>
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

export default UploadImage;
