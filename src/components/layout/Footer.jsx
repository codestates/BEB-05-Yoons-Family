import React from 'react';
import { Col, Layout, Row } from 'antd';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import Comment from '../Comment';

const { Footer: _Footer } = Layout;

const footerData = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/64685759?v=4',
    github_id: 'thyoondev',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/52116660?v=4',
    github_id: 'yoonej111',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/100079037?v=4',
    github_id: 'yjjjwww',
  },
];

function FooterComponent() {
  return (
    <Footer>
      <Row justify="space-between">
        {footerData.map((info) => {
          return (
            <Col
              xs={0}
              xl={6}
              key={info.github_id}
              style={{ cursor: 'pointer' }}
              onClick={() =>
                (window.location.href = `https://github.com/${info.github_id}`)
              }
              title={`https://github.com/${info.github_id}`}
            >
              <Comment footerData={info}></Comment>
            </Col>
          );
        })}
      </Row>
      Created by Yoon's Family
    </Footer>
  );
}

const Footer = styled(_Footer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${theme.very_dark_blue_main} !important;
  color: ${theme.very_dark_blue_line} !important;
`;

export default FooterComponent;
