import './Icons.css';
import { CiClock2 } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { RiBankCardLine } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";

function Icons() {
  return (
   
    <div className='icons' >
        

        <div className='text10'> 
            <h3  > <CiClock2 /> Shope online </h3>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio </p>
        </div>
       
       
        <div className='text10'> 
            <h3 ><FaBoxOpen />Free shipping</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio </p>
        </div>
       

        <div className='text10'> 
           <h3> <RiBankCardLine />Return policy</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio </p>
        </div>
       

        <div className='text10'> 
            <h3> <BiDollarCircle />Payment</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio </p>
        </div>
       



       
    </div>
  );
}

export default Icons;
