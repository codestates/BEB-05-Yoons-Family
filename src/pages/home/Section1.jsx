import { Button as _Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';

function Section1() {
  return (
    <Wrapper>
      <ChildWrapper>
        <Title>NFT Exchange</Title>
        <Explain>Unleash your creativity</Explain>
        <Content>
          With NFT Exchange's beginner-friendly minting feature, verified NFT
          <br />
          Exchange users can create their own NFTs in just a few clicks! <br />
          Start minting your own NFTs with NFT Exchange today!
        </Content>
        {/* <Explain>창의력을 발휘하세요</Explain>
        <Content>
          NFT Exchange의 초보자 친화적인 발행 기능으로 검증된 NFT Exchange
          <br />
          사용자는 몇 번의 클릭만으로 자신의 NFT를 만들 수 있습니다!
          <br /> 지금 NFT Exchange로 자신만의 NFT를 발행하세요!
        </Content> */}
        <Button type="primary">Connet Wallet</Button>
      </ChildWrapper>
      <Image
        src="https://images.unsplash.com/photo-1645731504331-72636399448e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="main image"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: ${theme.space_4};
  gap: ${theme.space_4};

  /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); */
`;
const ChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: ${theme.fs_11};
  font-weight: ${theme.fw_700};
`;
const Explain = styled.p`
  font-size: ${theme.fs_8};
`;
const Content = styled.p`
  font-size: ${theme.fs_3};
`;

const Button = styled(_Button)`
  width: 200px;
`;

const Image = styled.img`
  width: 500px;
  object-fit: cover;
`;

export default Section1;
