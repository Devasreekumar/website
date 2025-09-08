import React from "react";
import { products } from "./products";

const ProductGrid = () => {
  // Split products into chunks of 2
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }

  // Headings for each row
  const headings = [
    "🌵 Succulent Specials",
    "🪴 Indoor Plants",
    "🌸 Flowering Collection",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🌱 Our Plant Store</h1>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-10">
          {/* Row Heading */}
          <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
            {headings[rowIndex]}
          </h2>

          {/* 2-column grid */}
          <div className="grid grid-cols-2 gap-6">
            {row.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-4"
              >
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-green-600 font-bold">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
