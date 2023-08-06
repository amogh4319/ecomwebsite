import React from "react";
import ProductItem from './ProductItem';
import { Container,Row,Col } from "react-bootstrap";
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
        <Container>
            <Row xs={2} md={2} lg={4} className="mb-3 g-4">
                
            <ul>
                {productsArr.map((item)=>(
                    <Col  >
                        <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        />
                        
                    </Col>
                ))}
            </ul>
            
            </Row>
        </Container>
        </>

    )
}
export default ProductList;