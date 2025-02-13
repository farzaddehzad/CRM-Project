import React from 'react'
import { useNavigate } from 'react-router';
import Button from '../Components/button';




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
      <div className='Logo'>
        <img src='assets/Shape.png' alt='Shape' /> 
        

      </div>
      <div className='buttonWrapper'>
        <Button className='SigninButton' text="Sign In" onClick={handleOnSignIn} />
        <Button className='SignupButton' text="Sign Up" onClick={handleOnSignUp} />

      </div>
    </div>

  
  )
}

export default Home;

