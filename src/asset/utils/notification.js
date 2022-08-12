import { notification } from 'antd';

//메타마스크 설치 안내
const metamaskInstallNoti = () => {
  notification.warning({
    message: 'Please Install the Metamask',
    description: (
      <>
        You have to Install the Metamask. <br />
        Visit the : &nbsp;
        <a href="https://metamask.io/" target="_blank">
          https://metamask.io
        </a>
      </>
    ),
    placement: 'topLeft',
  });
};

//메타마스크 연결 필요 안내
const loginWarningNoti = () => {
  notification.warning({
    message: 'Please Connect to Metamask',
    description: 'You have to connect with the Metamask.',
    placement: 'topLeft',
  });
};

//메타마스크 연결 성공 안내
const loginSuccessNoti = () => {
  notification.success({
    message: 'You are successfully connected Metamask',
    description: 'Start minting your own NFTs with NFT Exchange today!',
    placement: 'topLeft',
  });
};

//메타마스크 계정 변경 안내
const changedAccountNoti = (accountAdress) => {
  notification.success({
    message: 'You are successfully changed Account',
    description: 'Now adress is ' + accountAdress,
    placement: 'topLeft',
  });
};

//메타마스크 체인 변경 안내
const changedNetworkNoti = (chainName) => {
  notification.success({
    message: 'You are successfully connected Network',
    description: 'Now network is ' + chainName,
    placement: 'topLeft',
  });
};

export {
  metamaskInstallNoti,
  loginSuccessNoti,
  loginWarningNoti,
  changedAccountNoti,
  changedNetworkNoti,
};
