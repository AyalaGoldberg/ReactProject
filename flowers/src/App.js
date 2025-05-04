import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ShoppingBasket from './components/shoppingCart/ShoppingBasket';
import ChooseProduct from './components/ChooseProduct';
import FlowerFooter from './components/footer/FlowerFooter';
import { CartProvider } from './components/shoppingCart/CartOntext';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <CartProvider>
          <ChooseProduct></ChooseProduct>
        <ShoppingBasket></ShoppingBasket>
        </CartProvider>
        <FlowerFooter></FlowerFooter>
    </div>
  );
}                                     

export default App;                                            