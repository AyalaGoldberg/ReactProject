import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ShoppingBasket from './components/ShoppingBasket';
import ChooseProduct from './components/ChooseProduct';
import FlowerFooter from './components/footer/FlowerFooter';
import { CartProvider } from './components/CartOntext';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <ChooseProduct></ChooseProduct>
        <CartProvider>
        <ShoppingBasket></ShoppingBasket>
        </CartProvider>
        <FlowerFooter></FlowerFooter>
    </div>
  );
}                                     

export default App;                                            