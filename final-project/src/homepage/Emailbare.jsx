import React, { useState } from 'react';
import axios from 'axios'; 
import './Emailbare.css';
import { FiMail } from "react-icons/fi";

function Emailbare() {

  
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email) {
    setMessage("Please enter your email address");
    return;
  }

  setIsSubmitting(true);
  setMessage("");

  try {
    await axios.post("http://localhost:3001/mails", { mail: email });
    setMessage("Subscription successful! Thank you");
    setEmail("");
  } catch (error) {
    setMessage("Something went wrong ");
    setIsSubmitting(false); 
  }
};



    return (
        <div id='email' className='grid12'>
            
            <div className='text14'>
                <h3>INSCRIVEZ-VOUS À LA NEWSLETTER</h3>
                <p>Abonnez-vous pour les dernières histoires et promotions</p>
            </div>
            
      
            <form onSubmit={handleSubmit} className="emailbarre-form">
                <div className="emailbarre">
                    <input
                        type="email"
                        placeholder="Entrez votre email"
                        className="email-input"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting} 
                        required
                    />
                    
                    <button type="submit" className="iconbox" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span>...</span>
                        ) : (
                            <FiMail />
                        )}
                    </button>
                </div>
                
           
                {message && (
                    <p className={`status-message ${message.startsWith('') ? 'error' : 'success'}`}>
                        {message}
                    </p>
                )}
            </form>

        </div>
    );
}

export default Emailbare;