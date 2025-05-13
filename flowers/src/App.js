
import React from 'react';
import './App.css';


import Header from './components/Header';
import ShoppingBasket from './components/shoppingCart/ShoppingBasket';
import FlowerFooter from './components/footer/FlowerFooter';
import { CartProvider } from './components/shoppingCart/CartOntext';
import Gallery from './components/Galerry';
import ChooseProduct from './components/ChooseProduct';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import PaymentDetails from './components/shoppingCart/PaymentDetails';

function App() {
  const products = [
    {
      id: 1,
      name: 'פרח אדום',
      description: 'פרח יפהפה בצבע אדום.',
      price: 20,
      image: '/images/red-flower.jpg',
    },
    {
      id: 2,
      name: 'פרח כחול',
      description: 'פרח יפהפה בצבע כחול.',
      price: 25,
      image: '/images/blue-flower.jpg',
    },
    // הוסף מוצרים נוספים כאן
  ];

  return (
    <div className="App">
      <CartProvider>
        {/* <Nav></Nav> */}
        {/* <Header></Header> */}
        {/* <Gallery></Gallery> */}

        {/* <ChooseProduct></ChooseProduct> */}
        {/* <ShoppingBasket></ShoppingBasket> */}

        
        <Routes>
          <Route path='/' element={<>
            <Nav />
            <Header />
            {/* <Gallery products={products} /> */}
          </>} />
          <Route path='/shoppingBasket' element={<ShoppingBasket />} />
            <Route path='/paymentDetails' element={<PaymentDetails />} />
        </Routes>
        <FlowerFooter></FlowerFooter>
      </CartProvider>
    </div>
  );
}

export default App;