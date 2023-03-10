import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import Details from '../pages/Details';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="carrinho" element={<Cart />} />
      <Route path="detalhes" element={<Details />} />
      {/*  <Route path="*" element={() => <h1>teste</h1>} /> */}
    </Routes>
  );
}

export default AppRoutes;