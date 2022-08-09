import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from '../pages/explore/All';
import Section1 from '../pages/home/Section1';
import Section2 from '../pages/home/Section2';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={[<Section1 />, <Section2 />, <Section1 />, <Section2 />]}
      />
      <Route path="/assets" element={<All />} />
    </Routes>
  );
}
