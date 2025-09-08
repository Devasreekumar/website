import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalCount } from './CartSlice';

export default function Header() {
  const totalCount = useSelector(selectCartTotalCount);

  return (
    <header>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>
    </header>
  );
}
