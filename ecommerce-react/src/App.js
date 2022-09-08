import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <div>
          <NavBar />
          <ItemDetailContainer/>
          <Routes>
           <Route path='/' element={<ItemListContainer/>}></Route>
          </Routes>
            {/*
            <ItemListContainer></ItemListContainer>*/}
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
