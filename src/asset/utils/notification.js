import { notification } from 'antd';

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

const loginWarningNoti = () => {
  notification.warning({
    message: 'Please Connect to Metamask',
    description: 'You have to connect with the Metamask.',
    placement: 'topLeft',
  });
};

const loginSuccessNoti = () => {
  notification.success({
    message: 'You are successfully connected Metamask',
    description: 'Start minting your own NFTs with NFT Exchange today!',
    placement: 'topLeft',
  });
};

export { metamaskInstallNoti, loginSuccessNoti, loginWarningNoti };
