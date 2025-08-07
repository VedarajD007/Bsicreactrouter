import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/about">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
