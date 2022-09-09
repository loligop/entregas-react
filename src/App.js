import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Lolo' />}/>
          <Route path='/category' element={<ItemList />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </header>
      
      <ItemCount stock='5' initial='1' />
      <div>
  </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
