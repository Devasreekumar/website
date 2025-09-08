import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import ProductListing from './ProductListing';
import CartPage from './CartPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Default Home */}
        <Route path="/" element={<LandingPage />} />

        {/* Products Page */}
        <Route path="/products" element={<ProductListing />} />

        {/* Cart Page */}
        <Route path="/cart" element={<CartPage />} />

        {/* Catch-all for invalid routes */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
