import axios from 'axios';
import { ENDPOINT_URL } from '.';

export function connectAPI(account, balance, chain) {
  const params = {
    user_account: account,
    user_balance: balance,
    chain: chain,
  };
  axios
    .post(`${ENDPOINT_URL}/connect`, JSON.stringify(params), {
      headers: { 'Content-Type': `application/json` },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
