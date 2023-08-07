import React from "react";
//import CartItem from './CartItem';
import { Modal} from "react-bootstrap";

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
const Cart =(props)=>{
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
    <Modal>
        <Modal.Header>
        <Modal.Title>
            helloGoodMorning!!!
        </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Modal.Body>
    </Modal>
    )
}

        

    

export default Cart;