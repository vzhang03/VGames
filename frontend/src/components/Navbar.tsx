import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();


  return (
    <nav>
      <button onClick={()=> {navigate("/")}}>Home</button>
    </nav>
  );
};

export default Navbar;