import React from 'react';
import ProductCard from './ProductCard';
import { products } from './products';

export default function ProductListing() {
  return (
    <div>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
