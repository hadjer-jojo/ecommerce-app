import './Productthree.css';
import lampes from './assets/lampes.png';
import { IoIosArrowForward } from 'react-icons/io';

function Productthree() {
  return (
    <section className="product-section">
      <div className="grid">
      

        <div className="left">
          <h1 className="title"> CONTEMPORARY LAMPS</h1>

          <p className="text">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Consequat dolor odio odio
             malesuada at condimentum adipiscing iaculis semper.</p>

          <button id='button' className="more1">
            view more <IoIosArrowForward />
          </button>
        </div>

      
        <div className="right">
          <img className="product" src={lampes} alt="Chairs" />
        </div>
      </div>
    </section>
  );
}

export default Productthree;
