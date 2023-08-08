import React, { useContext, useState } from "react";
import {Navbar,Nav,Button} from 'react-bootstrap';
import ProductContext from "../store/product-context";
import Cart from "./cart/Cart";
import AboutUs from "./AboutUs";
//import ProductList from "./ProductList";
import Products from "./Products";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom'
import ProductList from "./ProductList";
import HomePage from './HomePage';


const Navigation =(props)=>{
    const [showCart,setShowCart]=useState(false);
    const ctx=useContext(ProductContext);
    let quantity=0;
    ctx.items.forEach((item)=>{
        quantity=quantity+Number(item.quantity)
    })

    const showCartHandler=()=>{
        setShowCart(true);
        
    }
    
    
    

    
    return (
        <>
    <Router>
         <Navbar  bg="dark">
        <Navbar.Collapse>
          <Nav >
            <Nav.Item>
            <Nav.Link as={Link} to='/home' style={{color:'white'}}><b>HOME</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={Link} to='/store' style={{color:'white'}}><b>STORE</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={Link} to='/about' style={{color:'white'}}><b>ABOUT</b></Nav.Link>
            </Nav.Item>
            
            
          </Nav>
           
        </Navbar.Collapse>
        
        <Navbar.Collapse className="d-flex justify-content-end">
          <Button variant='warning' onClick={showCartHandler}><span>Your Cart :</span>
            <span>{quantity}</span>
           
          </Button>
          
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Routes>
            <Route path='/about' element={<AboutUs/>}>
                
            </Route>
            <Route path='/home' element={<HomePage />}>
                
            </Route>
            
            <Route path='/store' element={<ProductList products={Products} />}>
                
            </Route>
        </Routes>
      </div>
      </Router>
      {showCart&&<Cart show={showCart} hideCartHandler={() => setShowCart(false)} />}
      
        </>
    )
}
export default Navigation;