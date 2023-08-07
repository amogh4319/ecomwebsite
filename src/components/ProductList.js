import React from "react";

import { Container,Row,Col,Card,Button } from "react-bootstrap";
const productsArr = [

    {
    id:'Album 1',
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:'Album 2',
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
        id:'Album 3',
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
        id:'Album 4',
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const ProductList=(props)=>{
    

    
    return (
        <>
        <Container  >
      <Row xs={2} md={2} className='mb-3'>
        <Col className="shadow fluid">
        <Card>
          <Card.Title style={{textAlign:'center'}}>Album 1</Card.Title>
          <Card.Img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt='card1'/>
          <Card.Footer >
            
              price:100
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button >Add to Cart</Button>
              </div>
              
            
          </Card.Footer>
        </Card>
        </Col>
        <Col className="shadow fluid">
        <Card>
          <Card.Title style={{textAlign:'center'}}>Album 2</Card.Title>
          <Card.Img src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' alt='card1'/>
          <Card.Footer>
            
          price:50
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button >Add to Cart</Button>
              </div>
            
          </Card.Footer>
        </Card>
        </Col>
      </Row>
      <Row xs={2} className='mb-3'>
      <Col className="shadow fluid">
        <Card>
          <Card.Title style={{textAlign:'center'}}>Album 3</Card.Title>
          <Card.Img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' alt='card1'/>
          <Card.Footer>
            
          price:70
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button >Add to Cart</Button>
              </div>
        
          </Card.Footer>
        </Card>
        </Col >
        <Col className="shadow fluid">
        <Card>
          <Card.Title style={{textAlign:'center'}}>Album 4</Card.Title>
          <Card.Img src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' alt='card1'/>
          <Card.Footer>
            
          price:100
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button >Add to Cart</Button>
              </div>
            
          </Card.Footer>
        </Card>
        </Col>
      </Row>
    </Container>
        </>

    )
}
export default ProductList;