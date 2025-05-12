// 
import React from 'react';
import './App.css';


import Header from './components/Header';
import ShoppingBasket from './components/shoppingCart/ShoppingBasket';
import FlowerFooter from './components/footer/FlowerFooter';
import { CartProvider } from './components/shoppingCart/CartOntext';
import Gallery from './components/Galerry';

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
        <Header></Header>
        {/* <Gallery></Gallery> */}
        <CartProvider>
          {/* <ChooseProduct></ChooseProduct> */}
        <ShoppingBasket></ShoppingBasket>
        </CartProvider>
        <FlowerFooter></FlowerFooter>
    </div>
  );
}

export default App;