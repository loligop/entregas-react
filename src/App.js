import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <ItemListContainer greeting='Lolo' />
      </header>
      <ItemDetailContainer />
      <ItemCount stock='5' initial='1' />
      <ItemList />
      <div>
  </div>
    </div>
    
  );
}

export default App;
