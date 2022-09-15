import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import VideoPromocional from './components/VideoPromocional/VideoPromocional';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';



function App() {
  return (
<BrowserRouter>
      <div className='App'>
        <div>
          <NavBar/>
          
          <Routes>
            <Route path='/home' element={<VideoPromocional/>}></Route>
            
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/productos/:categoryId/:detalleId' element={<ItemDetailContainer/>}> </Route>
            
           
         
          </Routes>
          <Footer/>
        </div>
      </div>
</BrowserRouter>
  


  );
}

export default App;
