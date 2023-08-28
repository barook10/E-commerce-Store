import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer className="footer"/>
      
    </BrowserRouter>
  );
};

export default App;
