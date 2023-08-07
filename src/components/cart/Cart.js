// Cart.js
import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button, Card } from "react-bootstrap";
import ProductContext from "../../store/product-context";

const Cart = (props) => {
  const ctx = useContext(ProductContext);
  const cartItems = ctx.items;

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const removeItemHandler = (itemId) => {
    ctx.removeItem(itemId); // Implement this function in your product context to remove the item
  };

  return (
    <Modal {...props} onHide={props.hideCartHandler} size="lg">
        <Container>
      <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          
            <Container>
            <Row>
            <Col xs={6} md={6}>
              <h6>ITEM</h6>
            </Col>
            <Col xs={2} md={2}>
              <h6>PRICE</h6>
            </Col>
            <Col xs={2} md={2}>
              <h6>QUANTITY</h6>
            </Col>
          </Row>
          {cartItems.map((item) => (
            <Row key={item.title}>
                <hr/>
              <Col xs={6} md={6}>
                <Card.Img src={item.imageUrl} alt={item.title} />
                <Card.Title>{item.title}</Card.Title>
              </Col>
              
              <Col xs={2} md={2}>
                <p>{item.price}</p>
              </Col>
              <Col xs={2} md={2}>
                <p>{item.quantity}</p>
                <Button variant="danger" onClick={()=>removeItemHandler(item.id)}>Remove</Button>
              </Col>
            </Row>
            
            
          ))}
          <hr/>
        </Container>
          
      </Modal.Body>
      <p style={{ textAlign: "end" }}>
        <b>Total: {total}</b>
      </p>
      <Modal.Footer>
        <Button onClick={props.hideCartHandler}>
            Close
        </Button>
      </Modal.Footer>
      </Modal.Dialog>
      </Container>
    </Modal>
  );
};

export default Cart;
