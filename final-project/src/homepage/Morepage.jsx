import './Morepage.css';
import deco from './assets/deco.png';
import candle from './assets/candle.png';
import chaise from './assets/chaise.png';
import Product from './Product';
import Producttwo from './producttwo'
import Productthree from './Productthree';
import Baregris from './Baregris';
import Icons from './Icons'
import Emailbare from './Emailbare';
import Barrenoir from './Barrenoir';

function MorePage({ moreRef }) {

  return (

    <section ref={moreRef} className="more-section">
  <h2 className="more-title">PRODUCT OF THE WEEK</h2>

     <div className="triangle-text" id="more-text">
  <p>Discover our latest piece, carefully curated to bring a touch of elegance and warmth </p>
  <p>  to your home. Designed with timeless style and crafted with care,it's the </p>
  <p> perfect addition to elevate your living space this season.</p> 
      </div>

      <div id='grid' className='center'>
         
         <div  className="product-card">
               <img className='product1'  src={deco} alt="Plant" />

               <div>
                  <p className="product-title">deco</p>
                 <p className='price'>4600 da</p>
               </div>

        </div>



         <div  className="product-card">
              
                <img className='product1'  src={candle} alt="candle" />

               <div>
                  <p className="product-title">candle</p>
                 <p className='price'>1950 da</p>
               </div>

        </div>



       <div  className="product-card">
                <img className='product1'  src={chaise} alt="chaire" />

               <div>
                  <p className="product-title">chaire</p>
                  <p className='price'>7800 da</p>
               </div>

        </div>
      </div>
   

      <Product/>
      <Producttwo/>
      <Productthree/>
      <Baregris/>
      <Icons/>
      <Emailbare/>
      <Barrenoir/>

  
    </section>
  );
}

export default MorePage;
