import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../assets/home.svg';
import MenuIcon from '../assets/menu.svg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <div 
        onClick={() => {navigate("/")}} 
        className="nav-icon-container"
      >
        <img 
          src={MenuIcon} 
          alt="Home" 
          width="36" 
          height="36" 
          className='nav-icon'
        />
      </div>
      <h1 className='navbar-title'>V-GAMES</h1>
      <div 
        onClick={() => {navigate("/")}} 
        className="nav-icon-container"
      >
        <img 
          src={HomeIcon} 
          alt="Home" 
          width="36" 
          height="36" 
          className='nav-icon'
        />
      </div>
    </nav>
  );
};

export default Navbar;