import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "./chef 1.svg";
import img2 from "./HomeChef.svg";
import Search from "./Search.jsx";

const Navigation = () => {
  return (
    <div className="navigation-container">

      <nav className="navigation">

        <ul className="navigation-list">

          <li className="navigation-item logo">
            <img src={img1} alt="Icon Image" className="navigation-icon" />
          </li>

          <li className="navigation-item brand">
            <img src={img2} alt="HomeChef Image" className="navigation-brand-image" />
          </li>

          <li className="navigation-item">
            <Link to="/" className="navigation-link">Home</Link>
          </li>

          <li className="navigation-item">
            <Link to="/about" className="navigation-link">About</Link>
          </li>

          <li className="navigation-item">
            <Link to="/contact" className="navigation-link">Contact</Link>
          </li>

          <li className="navigation-item search-bar">
            <Search />
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
