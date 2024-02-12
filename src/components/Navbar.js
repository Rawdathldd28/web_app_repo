import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import logo from '../assets/future-studio.png';
import { useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ backgroundColor: 'white', padding: '10px', display: 'flex', alignItems: 'center',  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <div>
        <img src="logo.png" alt="logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      </div>
      <div style={{ marginLeft: '150px' }}>
        <IoMenu style={{ width: '40px', height: '40px' }}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '5px', marginLeft: '20px', marginRight: '1255px', padding: '5px', outline: '2px solid gray', position: 'relative' }}>
        <input
          type="text"
          placeholder="Search"
          style={{ padding: '5px', borderRadius: '5px', outline: 'none', border: 'none', width: '100%' }}
        />
        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '205px' }}>
          <IoSearchSharp />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

