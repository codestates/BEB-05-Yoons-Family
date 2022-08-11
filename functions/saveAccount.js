import { useEffect, useState } from "react";
import axios from "axios";

const [address, setAddress] = useState();
const [balance, setBalance] = useState();

function saveAccount() {
  const data = {
    user_account: address,
    user_nickname: "",
    user_balance: balance,
  };

  axios
    .post("http://localhost:4000/connect", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

useEffect(() => {
  setAddress(window.ethereum.selectedAddress);
  saveAccount();
}, [address]);
