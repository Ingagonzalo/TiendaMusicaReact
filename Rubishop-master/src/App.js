import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola! Este es un texto provisorio." />
    </div>
  );
}

export default App;
