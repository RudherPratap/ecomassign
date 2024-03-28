import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from './actions';
import './styles.css';

const Home = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 25 },
    { id: 4, name: 'Product 4', price: 20 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h2>Home</h2>
        <Link to="/cart">
          <button className="cart-btn">Go to Cart</button>
        </Link>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;