import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';
import 'antd/dist/antd.min.css';
import Router from './router/Router';
import { Button, Space } from 'antd';
import erc721Abi from './erc721Abi';
import TokenList from './components/TokenList';
import { Layout } from 'antd';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { theme } from './style/theme';

const { Content } = Layout;

function App() {
  //web3 연동
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [newErc721Addr, setNewErc721Addr] = useState();
  const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  //지갑 연동
  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setAccount(accounts[0]);
  };

  //abi
  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721Addr);
    console.log(tokenContract);
    console.log(erc721Abi);

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }

    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();

      if (String(tokenOwner).toLowerCase() === account) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list([]);
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI }];
        });
      }
    }
  };

  return (
    <div className="App">
      <Layout
        className="layout"
        style={{
          height: '100%',
          background: `linear-gradient(${theme.very_light_blue_main}, ${theme.white} )`,
          color: `${theme.very_dark_blue_line}`,
          gap: `${theme.space_8}`,
        }}
      >
        <Header />
        <Content
          style={{
            padding: '0 50px',
            display: 'flex',
            flexDirection: 'column',
            gap: `${theme.space_8}`,
          }}
          className="site-layout-content"
        >
          <Router />

          {/* <p>{`account : ${account}`}</p>

            <div className="newErc721">
              <input
                type="text"
                onChange={(e) => {
                  setNewErc721Addr(e.target.value); // 입력받을 때마다 newErc721addr 갱신
                }}
              />
              <Button onClick={addNewErc721Token}>add new erc721</Button>
            </div>

            <TokenList
              web3={web3}
              account={account}
              erc721list={erc721list}
              newErc721Addr={newErc721Addr}
            /> */}
          {/* </ContentWrapper> */}
        </Content>

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
