import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import ProductCard from '../ProductCard/ProductCard';
import './Shoppage.css';
import Barrenoir from '../Barrenoir';



const Shoppage = ({ addToCart, cartItems }) => {
   
   
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  // recuperer les produits de database  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
      }
    };

    fetchProducts();
  }, []);




  // Filtrage par catégorie 
  const filterByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category_id === categoryId
      );
      setFilteredProducts(filtered);
    }
  };
  


  // Navigation
  const goToBlogPage = () => navigate("/blogpage");
  const goToHomePage = () => navigate("/");
  const goToShopPage = () => navigate("/shoppage");
  const goToAboutUs = () => navigate("/aboutus");

  return (
    <div>
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


      <div className="main-container">
      

        <div className="category">
          <p className="filterWord" onClick={() => filterByCategory(1)}>Living Room</p>
          <p className="filterWord" onClick={() => filterByCategory(2)}>Bedroom</p>
          <p className="filterWord" onClick={() => filterByCategory(3)}>Accessories</p>
          <p className="filterWord" onClick={() => filterByCategory(4)}>Kitchen</p>
          <button
            id="btnallproduct"
            className="filterWord"
            onClick={() => filterByCategory('all')}
          >
            All Products
          </button>
        </div>



        {/* Liste produits */}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No products in this category</p>
          )}
        </div>
      </div>

      <Barrenoir/>
    </div>
  );
};

export default Shoppage;
