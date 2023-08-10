// App.js
import React from "react";
//import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation"
import ProductProvider from "./store/ProductProvider";//Make sure to create this file with your product data
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import {Route,Routes} from 'react-router-dom'
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";


function App() {
 
  return (
  
    <ProductProvider>
    
        <header><Navigation /></header>
        <main>
          <Routes>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/store' element={<ProductList products={Products}/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/store/:productId' element={<ProductPage/>}></Route>
          </Routes>
        </main>
        
    </ProductProvider>


  
  );
}

export default App;
