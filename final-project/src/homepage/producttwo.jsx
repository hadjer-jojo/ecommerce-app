import './Producttwo.css';
import table from './assets/table.png';
import { IoIosArrowForward } from 'react-icons/io';

function Producttwo() {
  return (
    <section className="product-section">
      <div className="grid">
    
        <div className="left">
          <img className="product" src={table} alt="tablesalon" />
        </div>

      
        <div className="right">
          <h1 className="title">TABLES</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat dolor odio odio malesuada at condimentum adipiscing
            iaculis semper.
          </p>
          <button className="more1">
            view more <IoIosArrowForward />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Producttwo;





    

