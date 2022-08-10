import { notification } from 'antd';

export const loginNoti = () => {
  notification.warning({
    message: 'Please Connect to Metamask',
    description: 'You have to connect with the Metamask.',
    placement: 'topLeft',
  });
};
