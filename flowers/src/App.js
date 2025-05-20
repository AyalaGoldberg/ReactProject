
import React, { useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';

import Header from './components/Header';
import ShoppingBasket from './components/shoppingCart/ShoppingBasket';
import FlowerFooter from './components/footer/FlowerFooter';
import { CartProvider } from './components/shoppingCart/CartOntext';
import Gallery from './components/Galerry';
import ChooseProduct from './components/ChooseProduct';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import PaymentDetails from './components/shoppingCart/PaymentDetails';
import img1 from './images/headerImg/800_63f267227c49c.png';
import img2 from './images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg';
import About from './components/About';
import BarDesigns from './components/shop/BarDesigns';
import HupotDesigns from './components/shop/HupotDesigns';
import CalasChairs from './components/shop/CalasChairs';
import CalasBouquets from './components/shop/CalasBouquets';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const showSearch = location.pathname === '/' ||
  location.pathname === '/shop/calasChairs'||
  location.pathname === '/shop/calasBouquets'||
  location.pathname === '/shop/hupotDesigns'||
  location.pathname === '/shop/barDesigns';
   // דפים שרוצים חיפוש
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="App">
      <CartProvider>
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} showSearch={showSearch} />
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Gallery searchTerm={searchTerm} isModalOpen={isModalOpen} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path='/chooseProduct' element={<ChooseProduct />} />
          <Route path='/shoppingBasket' element={<ShoppingBasket />} />
          <Route path='/paymentDetails' element={<PaymentDetails />} />
          <Route path='/shop/hupotDesigns' element={<HupotDesigns />} />
          <Route path='/shop/barDesigns' element={<BarDesigns />} />
          <Route path='/shop/calasChairs' element={<CalasChairs/>} />
          <Route path='/shop/calasBouquets' element={<CalasBouquets/>} />
        </Routes>
        <FlowerFooter />
      </CartProvider>
    </div>
  );
}

export default App;