import React from 'react';
import { BrowserRouter as Router, Routes, Route as DefaultRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; 
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <DefaultRoute path="/" element={<Home />} />
          <DefaultRoute path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
