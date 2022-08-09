import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from '../pages/explore/All';
import Create from '../pages/create/Create';
import Notfound from '../pages/Notfound';
import Section1 from '../pages/home/Section1';
import Section2 from '../pages/home/Section2';

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
          <Section2 />,
          <Section2 />,
        ]}
      />
      <Route path="/assets" element={<All />} />
      <Route path="/assets/create" element={<Create />} />
    </Routes>
  );
}
