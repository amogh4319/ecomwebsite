import React from "react";
import { Button } from "react-bootstrap";
const CartItem =(props)=>{
    const images=`${props.imageUrl}`;
    return (
        <>
            
            <span>
                <img src={images} alt="cart"/>
                Title:{props.title}</span>
            
            <span>{props.price}</span>
            <span>x{props.quantity}</span>
            <Button variant="danger" >Remove</Button>
        </>
    )
}
export default CartItem;