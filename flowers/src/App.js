// import React from 'react';
// import './App.css';


// import Header from './components/Header';
// import ShoppingBasket from './components/shoppingCart/ShoppingBasket';
// import FlowerFooter from './components/footer/FlowerFooter';
// import { CartProvider } from './components/shoppingCart/CartOntext';
// import Gallery from './components/Galerry';
// import ChooseProduct from './components/ChooseProduct';
// import Nav from './components/nav/Nav';
// import { Route, Routes } from 'react-router-dom';
// import PaymentDetails from './components/shoppingCart/PaymentDetails';
// import img1 from './images/headerImg/800_63f267227c49c.png';
// import img2 from './images/extrasImg/new-pic-flowernet-balloons-greyBG-100x100.jpg';

// function App() {
//   const products = [
//     {
//       id: 1,
//       name: 'פרח אדום',
//       description: 'פרח יפהפה בצבע אדום.',
//       price: 20,
//       image: img1,
//     },
//     {
//       id: 2,
//       name: 'פרח כחול',
//       description: 'פרח יפהפה בצבע כחול.',
//       price: 25,
//       image: img2,
//     },
//     // הוסף מוצרים נוספים כאן
//   ];

//   return (
//     <div className="App">
//       <CartProvider>
//         {/* <Nav></Nav> */}
//         {/* <Header></Header> */}
//         {/* <Gallery></Gallery> */}

//         {/* <ChooseProduct></ChooseProduct> */}
//         {/* <ShoppingBasket></ShoppingBasket> */}


//         <Routes>
//           <Route path='/' element={<>
//             <Nav />
//             <Header />
//             <Gallery products={products} />
//           </>} />
//           <Route path='/shoppingBasket' element={<ShoppingBasket />} />
//           <Route path='/paymentDetails' element={<PaymentDetails />} />
//         </Routes>
//         <FlowerFooter></FlowerFooter>
//       </CartProvider>
//     </div>
//   );
// }

// export default App;
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

function App() {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'פרח אדום',
  //     description: 'פרח יפהפה בצבע אדום.',
  //     price: 20,
  //     image: img1,
  //   },
  //   {
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },{
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },{
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },{
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },{
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },{
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },{
  //     id: 2,
  //     name: 'פרח כחול',
  //     description: 'פרח יפהפה בצבע כחול.',
  //     price: 25,
  //     image: img2,
  //   },
  //   // הוסף מוצרים נוספים כאן
  // ];

  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const showSearch = location.pathname === '/' || location.pathname === '/shop'; // דפים שרוצים חיפוש

  return (
    <div className="App">
      <CartProvider>
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} showSearch={showSearch} />
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Gallery searchTerm={searchTerm} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path='/chooseProduct' element={<ChooseProduct />} />
          <Route path='/shoppingBasket' element={<ShoppingBasket />} />
          <Route path='/paymentDetails' element={<PaymentDetails />} />
          {/* אפשר להוסיף כאן ראוטים נוספים לדפים כמו About, Contact וכו' */}
        </Routes>
        <FlowerFooter />
      </CartProvider>
    </div>
  );
}

export default App;