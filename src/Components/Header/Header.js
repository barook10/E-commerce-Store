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
          <a href=''>E-commerce Store</a>
          </Link>
          <ScrollLink
            to="product-list"
            smooth={true}
            duration={500}
            className="navbar-item"
          >
            <a href='' className='products'>Products</a>
          </ScrollLink>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
