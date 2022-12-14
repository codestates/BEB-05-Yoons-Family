import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from '../pages/create/Create';
import Notfound from '../pages/Notfound';
import Section1 from '../pages/home/Section1';
import Section2 from '../pages/home/Section2';
import Explore from '../pages/explore/Explore';
import Section3 from '../pages/home/Section3';
import Collection from '../pages/collection/Collection';
import NFTDetails from '../pages/detail/NFTDetails';
import Account from '../pages/account/Account';
import BuyNFTDetails from '../components/explore/BuyNFTDetails';
import MyNFTDetails from '../components/mypage/MyNFTDetails';

export default function Router({ web3, collapsed, setCollapsed, account }) {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route
        path="/"
        element={[
          <Section1 collapsed={collapsed} setCollapsed={setCollapsed} account={account} />,
          <Section2 />,
          <Section3 />,
        ]}
      />
      <Route path="/assets" element={<Explore />} />
      <Route path="/assets/trending" element={<Explore web3={web3} account={account} />} />
      <Route path="/assets/art" element={<Explore />} />
      <Route path="/assets/collectibles" element={<Explore />} />
      <Route
        path="/assets/buy/ethereum/:asset_contract/:token_id"
        element={<BuyNFTDetails web3={web3} setCollapsed={setCollapsed} account={account} />}
      />
      <Route
        path="/assets/create"
        element={<Create web3={web3} setCollapsed={setCollapsed} account={account} />}
      />
      <Route
        path="/mypage"
        element={<Account web3={web3} setCollapsed={setCollapsed} account={account} />}
      />
      <Route
        path="/assets/mypage/ethereum/:asset_contract/:token_id"
        element={<MyNFTDetails web3={web3} setCollapsed={setCollapsed} account={account} />}
      />
      <Route path="/collection/:collection_key" element={<Collection />} />
      <Route
        path="/assets/ethereum/:asset_contract/:token_id"
        element={<NFTDetails web3={web3} setCollapsed={setCollapsed} account={account} />}
      />
    </Routes>
  );
}
