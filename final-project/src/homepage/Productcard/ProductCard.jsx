import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price : {product.price} da</p>
      <p className='description'>{product.description}</p>
      


      <div className="quantity-control">
        <button onClick={handleDecrement}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button
        className='btnajoute'
        onClick={() => addToCart(product, quantity)} 
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;