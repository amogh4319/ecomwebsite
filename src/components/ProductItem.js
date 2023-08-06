import React from "react";
import {Button, Card} from 'react-bootstrap'
const ProductItem=(props)=>{
    const images=`${props.imageUrl}`;
    return (
        
            <Card>
                <Card.Title className="text-center">{props.id}</Card.Title>
                <Card.Img src={images} alt="cards"></Card.Img>
                <Card.Footer>
                    Price: {props.price}
                    <Button>Add to Cart</Button>
                </Card.Footer>

            </Card>
            
        
        
    )
}
export default ProductItem;