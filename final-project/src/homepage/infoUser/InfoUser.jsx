import React, { useState } from "react";
import "./InfoUser.css";
import axios from "axios";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const InfoUser = ({ cartItems = [], setCartItems }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryType, setDeliveryType] = useState("home");

  const [errors, setErrors] = useState({});
  const [globalMessage, setGlobalMessage] = useState("");
  const [globalType, setGlobalType] = useState("");

  const wilayas = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
    "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
    "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
    "Constantine", "Médéa", "Mostaganem", "MSila", "Mascara", "Ouargla", "Oran", "El Bayadh",
    "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued",
    "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
    "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès",
    "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!firstName) newErrors.firstName = "Please enter your first name!";
    if (!lastName) newErrors.lastName = "Please enter your last name!";
    if (!phone) newErrors.phone = "Please enter your phone number!";
    if (!wilaya) newErrors.wilaya = "Please select your wilaya!";
    if (!address) newErrors.address = "Please enter your address!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const orderData = {
      customer: { firstName, lastName, phone, wilaya, address },
      items: cartItems,
      totalPrice: cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
      deliveryType,
    };

    try {
      await axios.post("http://localhost:3001/orders", orderData);
      setGlobalMessage("Order sent successfully!");
      setGlobalType("success");
      setCartItems([]);

      setFirstName("");
      setLastName("");
      setPhone("");
      setWilaya("");
      setAddress("");
      setDeliveryType("home");
    } catch (error) {
      setGlobalMessage("🛒 Your cart is empty");
      setGlobalType("error");
    }
  };


  

  const navigate = useNavigate();
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
          <div
            className="cart-icon"
            onClick={() => navigate("/cartpage")}
            style={{ cursor: "pointer" }}
          >
            <HiOutlineShoppingCart />
            {cartItems.length > 0 && (
              <span className="nombre-article">{cartItems.length}</span>
            )}
          </div>
          <GoSearch />
          <IoIosMenu />
        </div>
      </nav>

     
      <div className="info-container">
        {/* gauche */}
        <div className="form-section">
          <h2>Billing Details</h2>

          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
              value={firstName}
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <label>Last Name:</label>
            <input
              value={lastName}
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <label>Phone number:</label>
            <input
              type="tel"
              value={phone}
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label>Wilaya:</label>
            <select
              value={wilaya}
              onChange={(e) => setWilaya(e.target.value)}
            >
              <option value="">Select your wilaya</option>
              {wilayas.map((w, i) => (
                <option key={i} value={w}>
                  {w}
                </option>
              ))}
            </select>
            {errors.wilaya && <p className="error">{errors.wilaya}</p>}

            <label>Address:</label>
            <textarea
              value={address}
              placeholder="Enter your address"
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
            />
            {errors.address && <p className="error">{errors.address}</p>}

            <label>Delivery:</label>
            <p>
              <input
                type="radio"
                value="home"
                checked={deliveryType === "home"}
                onChange={(e) => setDeliveryType(e.target.value)}
              />{" "}
              Home
            </p>
            <p>
              <input
                type="radio"
                value="office"
                checked={deliveryType === "office"}
                onChange={(e) => setDeliveryType(e.target.value)}
              />{" "}
              Delivery office
            </p>

            {/* Message global */}
            {globalMessage && (
              <div className={`message ${globalType}`}>{globalMessage}</div>
            )}

            <button className="confirmorder" type="submit">
              Confirm Order
            </button>
          </form>
        </div>

        {/* cote droite !! */}
        <div className="cart-section">
          <h2 className="votrepanier">Your Cart</h2>
          {cartItems.length === 0 ? ( // verification produit d epanier 
            <p className="empty-cart">🛒 Your cart is empty</p>
          ) : (  // if y'a des produits affichage 
            <>    
              <ul>  
                {cartItems.map((item) => (
                  <li key={item._id} style={{ marginBottom: 8 }}>
                    <strong>{item.name}</strong> — {item.price} DA ×{" "}
                    {item.quantity} = {Number(item.price) * item.quantity} DA 
                  </li>
                ))}
              </ul>
              <h3>
                Total :{" "}
                {cartItems.reduce(  // pour le calcule de prix
                  (sum, i) => sum + i.price * i.quantity,
                  0
                )}{" "}
                DA
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
