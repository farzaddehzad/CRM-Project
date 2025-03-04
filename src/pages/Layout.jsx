import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Components/button';
import '../index.css'; // Importera index.css för att använda de uppdaterade stilarna

export default function Layout() {

  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleOnHome() {
    navigate("/Home");
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Här kan du hantera formulärdata, t.ex. skicka det till en server
    console.log({ company, email, message });
  }


  return (
  
  <div className='homeWrapper'>
    
        <div className='buttonWrapper-Layout'>
          <Button className='SigninButton-Layout' text="Sign In" onClick={handleOnHome} />
      </div>
      <form onSubmit={handleSubmit} className='formWrapper'>
        <div className='Logo-Layout'>
          <img src='assets/Shape.png' alt='Shape' /> 
        </div>
        <div className='formGroup'>
          <label htmlFor='company'>Välj företag:</label>
          <select id='company' value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value=''>Välj ett företag</option>
            <option value='Apple AB'>Apple AB</option>
            <option value='Tesla AB'>Tesla AB</option>
          </select>
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Gmail:</label>
          <input type='email' id='email' placeholder='Skriv gmail...' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div className='formGroup'>
          <label htmlFor='message'>Meddelande:</label>
          <input className='form-medelande' id='message'  value={message} onChange={(e) => setMessage(e.target.value)} required ></input>
        </div>
        <Button className='SignupButton' text="Skicka in" />
      </form>
    </div>

  );
};

  