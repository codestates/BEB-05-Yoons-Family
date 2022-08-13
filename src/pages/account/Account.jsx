import React, { useEffect, useState } from 'react';
import { Col, Row, Typography } from 'antd';

import { theme } from '../../style/theme';
import NotAuthorized from '../NotAuthorized';
import { loginWarningNoti } from '../../asset/utils/notification';
import AccountNFTList from './AccountNFTList';
import erc721Abi from '../../erc721Abi';
import Axios from 'axios';
const contract_addr = process.env.REACT_APP_CONTRACT_ADDRESS;

const { Title } = Typography;

function AccountRouter({ web3, setCollapsed, account }) {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    !account && loginWarningNoti();
    !account && setCollapsed(false);
    getNFT();
  }, [account]);

  const getNFT = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, contract_addr, {
      from: account,
    });

    const result = await tokenContract.methods.getNftTokens(account).call({ from: account });
    console.log('============yoyoyoyo');
    console.log(result[0].nftTokenId);
    const metadata = await Promise.all(
      result
        .filter((res) => res.nftTokenURI.startsWith('https://'))
        .map((res) => Axios.get(res.nftTokenURI).then(({ data }) => Object.assign(data, res)))
    );

    const correctMetadata = metadata
      .filter((meta) => meta.image)
      .map((meta) => {
        return {
          collection_key: 'cryptoDickbutts',
          collection_name: meta.description,
          collection_author: 'FCD457',
          collection_profile_img:
            'https://lh3.googleusercontent.com/vw-gp8yUYkQsxQN5xbHrWEhY7rQWQZhIjgO2tvLxu46VY6iwulwWZt5VFS2Q9gy9qJaiJk8QspZs0qaM9z1ODeIyeUUseABOxdfVrC8=s16',
          // collection_background_img:
          //   'https://lh3.googleusercontent.com/BKe5JQV60t_ExHygABrea_2-ZrDTanAZng6sGePzffYJHb7OdTw-G8JqTcOqRzYcAZQIHeZbhSbgoYv6ionrwxkFU6Wb9TKdwUWK-g=h600',
          collection_banner_img: `https://ipfs.io/ipfs/${meta.image.split('//')[1]}`,
          tokenId: meta.nftTokenId,
        };
      });
    setImageList(correctMetadata);
  };

  return !account ? (
    <NotAuthorized />
  ) : (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Title
          style={{
            marginBottom: `${theme.space_7}`,
            fontSize: `${theme.fs_14}`,
            fontWeight: `${theme.fw_700}`,
            color: `${theme.very_dark_blue_line}`,
          }}
        >
          MY NFT List
        </Title>
        <AccountNFTList web3={web3} account={account} collectionData={imageList} />
      </Col>
    </Row>
  );
}

export default AccountRouter;
