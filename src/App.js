// App.js
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import ProductProvider from "./store/ProductProvider";
import Products from "./components/Products"; // Make sure to create this file with your product data

function App() {
  return (
    <ProductProvider>
      <Container className="gradient-content-center">
        <Navigation />
        <Header />
        <ProductList products={Products} />
      </Container>
    </ProductProvider>
  );
}

export default App;
