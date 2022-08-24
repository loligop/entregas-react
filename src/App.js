import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
