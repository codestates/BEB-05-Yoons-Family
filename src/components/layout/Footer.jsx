import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { theme } from '../../style/theme';
import Comment from '../Comment';

const { Footer: _Footer } = Layout;

function FooterComponent() {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <CommentWrapper>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </CommentWrapper>
      Created by Yoon's Family
    </Footer>
  );
}

const Footer = styled(_Footer)`
  display: flex;
  flex-direction: column;

  background-color: ${theme.very_dark_blue_main};
  color: ${theme.white};
  height: 300px;
  width: 100%;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${theme.space_8};
`;

export default FooterComponent;
