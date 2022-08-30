import React from 'react';

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="hola a todos"/>
    </>
  );
}

export default App;
