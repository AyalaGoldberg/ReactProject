import React, { useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
  const productsState = useSelector(state => state.products);
  const [productsToSearch, setProductsToSearch] = useState([]);

  useEffect(() => {
    switch (location.pathname) {
      case '/shop/barDesigns':
        setProductsToSearch(productsState?.barDesigns || []);
        break;
      case '/shop/calasChairs':
        setProductsToSearch(productsState?.calasChair || []);
        break;
      case '/shop/calasBouquets':
        setProductsToSearch(productsState?.calasBouquets || []);
        break;
      case '/shop/hupotDesigns':
        setProductsToSearch(productsState?.hupotDesigns || []);
        break;
      case '/':
        setProductsToSearch(productsState?.products || []);
        break;
      default:
        setProductsToSearch([]);
    }
  }, [location.pathname, productsState]);

  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);

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
        <Nav
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showSearch={showSearch}
          productsToSearch={productsToSearch}
        />
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
          <Route path='/shop/hupotDesigns' element={<HupotDesigns searchTerm={searchTerm} />} />
          <Route path='/shop/barDesigns' element={<BarDesigns searchTerm={searchTerm} />} />
          <Route path='/shop/calasChairs' element={<CalasChairs searchTerm={searchTerm} />} />
          <Route path='/shop/calasBouquets' element={<CalasBouquets searchTerm={searchTerm} />} />
        </Routes>
        <FlowerFooter />
      </CartProvider>
    </div>
  );
}

//מה נשאר:
//במוצרים הנוספים-שהכות תעבוד ושיתווסף לסל
//עיצוב התשלום בסל הקניות
//עדכון הכמות מהמודל לפני ההוספה לסל
//דף ליצרת קשר
export default App;