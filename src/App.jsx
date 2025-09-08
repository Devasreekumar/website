import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import CartPage from "./CartPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Common Header across all pages */}
      <Header />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
