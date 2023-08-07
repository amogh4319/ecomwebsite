import React, { useContext, useState } from "react";
import {Navbar,Nav,Button} from 'react-bootstrap';
import ProductContext from "../store/product-context";
import Cart from "./cart/Cart";
//import CartItem from './cart/CartItem';

// const cartElements = [

//     {
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
    
//     title: 'Black and white Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     title: 'Yellow and Black Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]
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
    
         <Navbar  bg="dark">
        <Navbar.Collapse className="justify-content-center">
          <Nav >
            <Nav.Item>
            <Nav.Link href="#home" style={{color:'white'}}><b>HOME</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#store" style={{color:'white'}}><b>STORE</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#about" style={{color:'white'}}><b>ABOUT</b></Nav.Link>
            </Nav.Item>
            
            
          </Nav>
           
        </Navbar.Collapse>
        
        <Navbar.Collapse className="d-flex justify-content-end">
          <Button variant='warning' onClick={showCartHandler}><span>Your Cart :</span>
            <span>{quantity}</span>
           
          </Button>
          
        </Navbar.Collapse>
      </Navbar>
      
      {showCart&&<Cart show={showCart} hideCartHandler={() => setShowCart(false)} />}
        </>
    )
}
export default Navigation;