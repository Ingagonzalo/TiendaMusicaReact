import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import VideoPromocional from './components/VideoPromocional/VideoPromocional';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './Context/useContext';
import Cart from './Context/Cart';



function App() {
  return (
<CartProvider>
    <BrowserRouter>
          <div className='App'>
            <div>
              <NavBar/>
              
              <Routes>
                <Route path='/home' element={<VideoPromocional/>}></Route>
                
                <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/productos/:categoryId/:detalleId' element={<ItemDetailContainer/>}> </Route>
                <Route path='/cart' element={<Cart/>}></Route>
              
            
              </Routes>
              <Footer/>
            </div>
          </div>
    </BrowserRouter>
</CartProvider>
  


  );
}

export default App;
