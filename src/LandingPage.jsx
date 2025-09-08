import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', background: '#eef' }}>
      <h2>Welcome to Plant Shop</h2>
      <p>Your one-stop shop for beautiful house plants!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
