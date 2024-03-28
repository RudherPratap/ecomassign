import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './actions';
import './styles.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="page-container">
      <div className="content-container">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: ${item.price * item.quantity}</p>
                <div className="buttons-container">
                  <button onClick={() => handleIncrease(item.id)} className="increase-btn">+</button>
                  <button onClick={() => handleDecrease(item.id)} className="decrease-btn">-</button>
                  <button onClick={() => handleRemove(item.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="cart-total">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;