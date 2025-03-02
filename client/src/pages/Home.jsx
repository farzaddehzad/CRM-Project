import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../Components/button';
import '../index.css'; // Importera index.css för att använda de uppdaterade stilarna

const Home = () => {
  const navigate = useNavigate();
  
  function handleOnSignUp() {
    navigate("/signup");
  }

  function handleOnSignIn() {
    navigate("/signin");
  }

  return (
    <div className='homeWrapper'>
      <div className='contentWrapper'>
        <div className='Logo-home'>
          <img src='assets/Shape.png' alt='Shape' /> 
        </div>
        <div className='buttonWrapper-home'>
          <Button className='SigninButton-home' text="Sign In" onClick={handleOnSignIn} />
          <Button className='SignupButton' text="Sign Up" onClick={handleOnSignUp} />
        </div>
      </div>
    </div>
  );
};

export default Home;

