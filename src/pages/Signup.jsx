import React from 'react';
import '../index.css'; // Importera index.css för att använda de uppdaterade stilarna
import { Navigate, useNavigate } from 'react-router';

const Signup = () => {

   const navigate = useNavigate();
  
  function HandleOnRegister() {
    navigate("/homes");  
  }


  return (
    <div className='homeWrapper'>
      <div className='contentWrapper'>
        <div className='Logo'>
          <img src='assets/Shape.png' alt='Shape' />
        </div>
        <div className='formWrapper'>
          <h1 className='signup-title'>Sign Up</h1>
          <input type='email' placeholder='Email' className='inputField' />
          <input type='password' placeholder='Password' className='inputField' />
          <input type='password' placeholder='Confirm Password' className='inputField' />
          <button className='SignupButton-signup' onClick={HandleOnRegister}>Registera dig</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
