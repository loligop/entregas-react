import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <ItemListContainer greeting='Lolo' />
      </header>
      <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div>
    </div>
    
  );
}

export default App;
