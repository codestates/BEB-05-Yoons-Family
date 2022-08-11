import { useEffect, useState } from "react";
import axios from "axios";

const [nfts, setNfts] = useState([]);
const [search, setSearch] = useState("");

async function exploreNFTByAddress(search) {
  let result = await axios.get(
    `http://localhost:4000/explore?address=${search}`
  );
  setNfts(result.data);
}

async function exploreNFTByName(search) {
  let result = await axios.get(`http://localhost:4000/explore?name=${search}`);
  setNfts(result.data);
}

function searchNft(search) {
  if (search.substr(0, 2) === "0X") {
    exploreNFTByAddress(search);
  } else {
    exploreNFTByName(search);
  }
}
