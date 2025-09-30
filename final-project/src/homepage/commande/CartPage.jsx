import React from "react";
import { useNavigate } from "react-router-dom";
import './CartPage.css';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';



const CartPage = ({ cartItems = [] }) => {
  const total = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

    const navigate = useNavigate();
     // Navigation
  const goToBlogPage = () => navigate("/blogpage");
  const goToHomePage = () => navigate("/");
  const goToShopPage = () => navigate("/shoppage");
  const goToAboutUs = () => navigate("/aboutus");

  return (


    <div style={{ padding: 50 }}>

         
            {/* Navbar */}
            <nav>
              <div id="homedecor" className="navbar">HomeDecor</div>
              <div className="menu">
                <a href="#" onClick={goToHomePage}>Home</a>
                <a href="#" onClick={goToShopPage}>Shop</a>
                <a href="#" onClick={goToAboutUs}>About us</a>
                <a href="#" onClick={goToBlogPage}>Blog</a>
              </div>
      
      
      <div className="icons">
         
         <div className="cart-icon" onClick={() => navigate("/cartpage")} style={{cursor: 'pointer'}}>
              <HiOutlineShoppingCart />
              {cartItems.length > 0 && <span className="nombre-article">{cartItems.length}</span>}
            </div>
            
        <GoSearch />
        <IoIosMenu />
      </div>
      
     </nav>



      <h2 className="votrepanier" >Your cart</h2>

      {cartItems.length === 0 ? (
        <p>🛒Your cart is empty </p>
      ) : (
        <> 
          <ul>
            {cartItems.map(item => (
              <li key={item._id} style={{ marginBottom: 8 }}>
                <strong>{item.name}</strong> — {item.price} DA × {item.quantity}
                = {Number(item.price) * item.quantity} DA
              </li>
            ))}
          </ul>

          <h3>Total : {total} DA</h3>

          <button onClick={() => navigate("/infoUser")} style={{cursor: 'pointer'}} className="commander"  >
            Commander
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
