import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ShoppingBasket from './components/ShoppingBasket';
import ChooseProduct from './components/ChooseProduct';
import FlowerFooter from './components/footer/FlowerFooter';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <ChooseProduct></ChooseProduct>
        <ShoppingBasket></ShoppingBasket>
        <FlowerFooter></FlowerFooter>
    </div>
  );
}                                     

export default App;                                            