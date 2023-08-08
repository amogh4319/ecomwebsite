// App.js
import React from "react";
//import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation"
import ProductProvider from "./store/ProductProvider";//Make sure to create this file with your product data



function App() {
 
  return (
    
    <ProductProvider>
      
        <Navigation />
        
        
      
    </ProductProvider>
  
  );
}

export default App;
