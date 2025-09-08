import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeItem, updateQuantity } from './CartSlice';

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
          <p>{item.name}</p>
          <p>Price: ₹{item.price}</p>
          <p>
            Quantity: 
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) - 1 }))}>-</button>
            {item.quantity || 1}
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) + 1 }))}>+</button>
          </p>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total: ₹{totalCost}</h3>
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <br />
      <a href="/products"><button>Continue Shopping</button></a>
    </div>
  );
}
