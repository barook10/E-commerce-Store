import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-item">
          <Link to="/" className="store">
          <h3 >E-commerce Store</h3>
          </Link>
          <ScrollLink
            to="product-list"
            smooth={true}
            duration={500}
            className="navbar-item"
          >
            <h3 className='products'>Products</h3>
          </ScrollLink>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
