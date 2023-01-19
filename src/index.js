import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/productos" element={<ItemListContainer navstatus="Estamos en la seccion productos" />} />
        <Route exact path="/category/:productoId" element={<ItemListContainer navstatus="Estamos en la seccion productos" />} />
        <Route exact path="/producto/:productoId" element={<ItemDetailContainer />} />
        <Route exact path="/nosotros" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
