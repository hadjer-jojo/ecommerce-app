import './Homepage.css';
import { useRef, useState } from "react";
import MorePage from "./Morepage";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom"; 


function Homepage( {cartItems = []}) {
    const [showMore, setShowMore] = useState(false);  // pour affichage de more page 
    const moreRef = useRef(null);
    const navigate = useNavigate(); 



    const goToBlogPage = () => { navigate("/blogpage") };
    const goToHomePage = () => { navigate("/") };
    const goToShopPage = () => { navigate("/shoppage") };
    const goToAboutUs = () => { navigate("/aboutus") };


    const viewMore = () => {
        setShowMore(true); // affichage true!
        setTimeout(() => {
            if (moreRef.current) {
                moreRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };



    return (

 <div id="homepage">
       
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
  <IoIosMenu  className="menu-responsive"/>
     </div>
      </nav>

        
            <h1 id="homepage1">ALL FOR YOUR HOME</h1>
            <h3 id="homepageh3">
                Elevate your home with the art of living.
                Explore exclusive décor pieces crafted to create warm,
                sophisticated atmospheres, where every detail embodies your unique style
            </h3>

      
            <div id="scroll">
                <p className="more" onClick={viewMore} style={{ cursor: "pointer" }}>
                    view more <IoIosArrowForward />
                </p>
            </div>

            {showMore && <MorePage moreRef={moreRef} />}
        </div>
    );
}

export default Homepage;