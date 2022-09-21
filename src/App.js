import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/detail/:itemid" element={<ItemDetailContainer />} />  
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
