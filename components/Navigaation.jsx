import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "./chef 1.svg"
import img2 from "./HomeChef.svg"
import Search from "./Search.jsx"


const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><img src={img1} alt="Icon Image" /></li>
          <li><img src={img2} alt="HomeChef Image" /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li> <Search/></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
