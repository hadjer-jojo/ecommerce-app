import './Barrenoir.css';
import { SocialIcon } from "react-social-icons";

function Barrenoir () {
  return (
  
  
<div className='barrenoir' id='affichage' >
   
   <div className='text15'>
  <h3>About Us</h3>
    <p>We provide high-quality home decor products to bring 
        elegance and comfort to your living space</p>
   </div>


   <div className='text15'>
    <h3>Useful Links</h3>
    <ul className='liste'>

        <li>Shop Products</li>

        <li>Delivery Information</li>

        <li>Returns & Refunds</li>
      
    </ul>
   </div>





   <div  className='text15'>
    <h3>Follow us on social media</h3>
    
    <ul className='liste' id='listeicons'>
        <li>instgram  <SocialIcon url="https://instagram.com" /></li>
        <li>facebook  <SocialIcon url="https://facebook.com" /></li>
        <li>Twitter   <SocialIcon url="https://twitter.com" /></li>
        <li>WhatsApp  <SocialIcon url="https://wa.me/213123456789" /> </li>
    
    </ul>
   </div>




   <div  className='text15'>
  <h3>Call center</h3>
    <p>homedecor@gmail.com</p>
    <p>+213 333 555</p>
   </div>

</div>
  );
}

export default Barrenoir;
