import { useCallback, useEffect, useMemo, useState } from 'react';

import 'antd/dist/antd.min.css';
import Router from './router/Router';
import { notification } from 'antd';
import erc721Abi from './erc721Abi';
import TokenList from './components/TokenList';
import { Layout } from 'antd';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { theme } from './style/theme';
import Sidebar from './components/layout/Sidebar';
import { useLocation } from 'react-router-dom';
import {
  loginSuccessNoti,
  loginWarningNoti,
  metamaskInstallNoti,
  changedAccountNoti,
  changedNetworkNoti,
} from './asset/utils/notification';
import { getNetworkName } from './asset/utils/getNetworkName';
import Web3 from 'web3';

const { Content } = Layout;

function App() {
  const location = useLocation();
  //web3 연동
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [balance, setbalance] = useState('');
  const [network, setNetwork] = useState('');
  //토큰
  const [newErc721Addr, setNewErc721Addr] = useState();
  const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰
  const [collapsed, setCollapsed] = useState(true);

  //web3 연결
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

  //계정 변경
  const handleAccountChange = (...args) => {
    const accounts = args[0];
    if (accounts.length === 0) {
      loginWarningNoti();
    } else if (accounts !== account) {
      setAccount(accounts);
      getBalance(accounts);
      if (accounts) {
        changedAccountNoti(accounts);
      }
    }
  };
  useEffect(() => {
    window.ethereum?.on('accountsChanged', handleAccountChange);
    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountChange);
    };
  });

  //네트워크 변경
  const handleNetworkChanged = (...args) => {
    const networkId = args[0];
    const networkName = getNetworkName(networkId);
    setNetwork(networkName);
    getBalance(account);
    changedNetworkNoti(networkName);
  };

  useEffect(() => {
    window.ethereum?.on('networkChanged', handleNetworkChanged);
    return () => {
      window.ethereum?.removeListener('networkChanged', handleNetworkChanged);
    };
  });

  //페이지 이동시 사이드바 닫힘
  useEffect(() => {
    setCollapsed(true);
  }, [location.pathname]);

  //지갑 연동
  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      metamaskInstallNoti();
      return;
    }
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setAccount(accounts[0]);
    getBalance(accounts[0]);

    !account[0] && loginSuccessNoti();
  };

  //잔액조회
  const getBalance = async (account) => {
    //eth로 단위 변경
    let balanceWei = await web3.eth.getBalance(account);
    let balanceETH = await web3.utils.fromWei(balanceWei, 'ether'); //eth로 단위 변경
    setbalance(balanceETH);
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
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          connectWallet={connectWallet}
          account={account}
          balance={balance}
        />
        <Content
          style={{
            padding: '0 50px',
            display: 'flex',
            flexDirection: 'column',
            gap: `${theme.space_10}`,
          }}
          className="site-layout-content"
        >
          <Router web3={web3} collapsed={collapsed} setCollapsed={setCollapsed} account={account} />

          {/*  <div className="newErc721">
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
