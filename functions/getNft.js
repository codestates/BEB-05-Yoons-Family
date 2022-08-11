import { useEffect, useState } from "react";
import axios from "axios";

const [nfts, setNfts] = useState([]);
const [myPageNfts, setMyPageNfts] = useState([]);
const [address, setAddress] = useState();

async function getNFTs() {
  let result = await axios.get("http://localhost:4000/explore");
  setNfts(result.data);
}

async function getMypage() {
  let result = await axios.get(
    `http://localhost:4000/explore?address=${address}`
  );
  setMyPageNfts([...result.data]);
}

useEffect(() => {
  setAddress(window.ethereum.selectedAddress);
  getNFTs();
  getMypage();
}, []);
