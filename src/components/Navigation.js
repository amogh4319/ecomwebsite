import React, { useState } from "react";
import {Navbar,Nav,Button,Badge,Modal, Container,Row,Col,Card} from 'react-bootstrap';
import CartItem from './cart/CartItem';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
const Navigation =(props)=>{
    const [showCart,setShowCart]=useState(false);
    const showCartHandler=()=>{
        setShowCart(true);
        
    }
    const hideCartHandler=(props)=>{
        setShowCart(false);
    }
    const items=cartElements.map((item)=>(
        <CartItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        />
    )

    )
    

    
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
          <Button variant='warning' onClick={showCartHandler}>cart
          <Badge bg="secondary" >0</Badge></Button>
           
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showCart} onHide={hideCartHandler}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:'center'}}>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                
            <Col xs={6} md={4}>
              ITEM
            </Col>
            
            <Col xs={6} md={4}>
              PRICE
            </Col>
            <Col xs={6} md={4}>
              QUANTITY
            </Col>
            <hr/>
            <Container>
                <Row>
                
                    <Col xs={6} md={4}>
                    <Card.Img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"/><Card.Title>Album 1</Card.Title>
                    </Col>
                    <Col xs={6} md={4}>
                    100
                    </Col>
                    <Col xs={6} md={4}>
                    <input type="text" defaultValue={2} style={{width:'20%'}} /><Button variant="danger">Remove</Button>
                    </Col>
          
                </Row>
                <hr/>
            </Container>
            <Container>
                <Row>
                
                    <Col xs={6} md={4}>
                    <Card.Img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"/><Card.Title>Album 2</Card.Title>
                    </Col>
                    <Col xs={6} md={4}>
                    50
                    </Col>
                    <Col xs={6} md={4}>
                    <input type="text" defaultValue={3} style={{width:'20%'}} /><Button variant="danger">Remove</Button>
                    </Col>
          
                </Row>
                <hr/>
            </Container>
            <Container>
                <Row>
                
                    <Col xs={6} md={4}>
                    <Card.Img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"/><Card.Title>Album 3</Card.Title>
                    </Col>
                    <Col xs={6} md={4}>
                    70
                    </Col>
                    <Col xs={6} md={4}>
                    <input type="text" defaultValue={1} style={{width:'20%'}} /><Button variant="danger">Remove</Button>
                    </Col>
          
                </Row>
                <hr/>
            </Container>
            
                </Row>
            </Container>
            
        </Modal.Body>
        <p style={{textAlign:"end"}}><b>Total  :0</b></p>
        <Modal.Footer>
        
          <Button variant="secondary" onClick={hideCartHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={hideCartHandler}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
      
        </>
    )
}
export default Navigation;