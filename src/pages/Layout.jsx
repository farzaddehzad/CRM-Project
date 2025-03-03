import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../Components/button';
import '../index.css'; // Importera index.css för att använda de uppdaterade stilarna

export default function Layout() {

  const navigate = useNavigate();

  function handleOnHome() {
    navigate("/Home");
  }

  return (
  
  <div className='LayoutWrapper'>
      <div className='LayoutcontentWrapper'>
        <div className='buttonWrapper-home'>
          <Button className='SigninButton-home' text="Sign In" onClick={handleOnHome} />
         
        </div>
      </div>
    </div>
  );
};

  