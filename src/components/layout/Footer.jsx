import React from 'react';
import { Col, Layout, Row } from 'antd';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import Comment from '../Comment';

const { Footer: _Footer } = Layout;

function FooterComponent() {
  return (
    <Footer>
      <Row justify="space-between">
        <Col flex="0 1 300px">
          <Comment></Comment>
        </Col>
        <Col flex="0 1 300px">
          <Comment></Comment>
        </Col>
        <Col flex="0 1 300px">
          <Comment></Comment>
        </Col>
        <Col flex="0 1 300px">
          <Comment></Comment>
        </Col>
      </Row>
      Created by Yoon's Family
    </Footer>
  );
}

const Footer = styled(_Footer)`
  display: flex;
  flex-direction: column;
  text-align: 'center';

  background-color: ${theme.very_dark_blue_main} !important;
  color: ${theme.white} !important;
`;

export default FooterComponent;
