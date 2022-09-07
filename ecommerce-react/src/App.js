import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <div>
          <NavBar />
          <Routes>
           <Route path='/contacto' element={<ItemListContainer/>}></Route>
          </Routes>
            {/*
            <ItemListContainer></ItemListContainer>*/}
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
