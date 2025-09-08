import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={product.thumbnail} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
}
