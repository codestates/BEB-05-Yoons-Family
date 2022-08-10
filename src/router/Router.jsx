import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from '../pages/create/Create';
import Notfound from '../pages/Notfound';
import Section1 from '../pages/home/Section1';
import Section2 from '../pages/home/Section2';
import Explore from '../pages/explore/Explore';
import Section3 from '../pages/home/Section3';
import Collection from '../pages/collection/Collection';

export default function Router({ collapsed, setCollapsed, account }) {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route
        path="/"
        element={[
          <Section1
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            account={account}
          />,
          <Section3 />,
          <Section2 />,
        ]}
      />
      <Route path="/assets" element={<Explore />} />
      <Route path="/assets/all" element={<Explore />} />
      <Route path="/assets/art" element={<Explore />} />
      <Route path="/assets/collectibles" element={<Explore />} />
      <Route path="/assets/create" element={<Create />} />
      <Route path="/collection/:collection_key" element={<Collection />} />
    </Routes>
  );
}
