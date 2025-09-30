import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Shoppage from './homepage/shoppage/Shoppage';
import AboutUs from './homepage/Aboutus/Aboutus.jsx';
import BlogPage from './homepage/blogpage/Blogpage.jsx';
import CartPage from './homepage/commande/CartPage.jsx';
import InfoUser from './homepage/infoUser/infoUser.jsx';
import Admin from './homepage/Admin/Admin.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);


  // pour vefifier avant de mettez dans le panier 
  const addToCart = (product, quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(item => item._id === product._id); 

    if (existingItemIndex > -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prev => [...prev, { ...product, quantity }]);
    }
  };



 console.log("Panier actuel:", cartItems); 
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shoppage" element={<Shoppage addToCart={addToCart} cartItems={cartItems} />} />
        <Route path="/cartpage" element={<CartPage cartItems={cartItems} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/infoUser" element={<InfoUser cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/Admin" element={<Admin />} />
       
      </Routes>
    </Router>
  );
}

export default App;
 
