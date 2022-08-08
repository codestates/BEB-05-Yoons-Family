import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {
  //web3 연동
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

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

  return (
    <div className="App">
      {/*상태확인*/}
      {console.log(web3)}
      {console.log('account : ' + account)}

      {/*지갑 버튼 */}
      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}
      >
        connect to MetaMask
      </button>
    </div>
  );
}

export default App;
