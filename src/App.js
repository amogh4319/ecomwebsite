// App.js
import React, { useContext } from "react";
//import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation"
import ProductProvider from "./store/ProductProvider";//Make sure to create this file with your product data
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import {Route,Routes,Navigate} from 'react-router-dom'
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import AuthContext from "./store/auth-context";


function App() {
 const ctx=useContext(AuthContext);
  return (
  
    <ProductProvider>
    
        <header><Navigation /></header>
        <main>
          <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          {ctx.isLoggedIn&&<Route path='/store' element={<ProductList products={Products}/>}></Route>}
          {!ctx.isLoggedIn&&<Route path='/store' element={<Navigate to='/' />}></Route>}
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          {ctx.isLoggedIn&&<Route path='/store/:productId' element={<ProductPage/>}></Route>}
          </Routes>
        </main>
        
    </ProductProvider>


  
  );
}

export default App;
