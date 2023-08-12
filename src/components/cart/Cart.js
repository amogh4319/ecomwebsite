// Cart.js
import React, { useContext ,useState,useEffect} from "react";
import { Modal, Container, Row, Col, Button, Card } from "react-bootstrap";
import ProductContext from "../../store/product-context";
import AuthContext from "../../store/auth-context";

const cartFromLocalStorage=JSON.parse(localStorage.getItem('cartItems'));

const Cart = (props) => {
  const ctx = useContext(ProductContext);
  const authCtx=useContext(AuthContext)
  
  let [cartItems, setCartItems] = useState(cartFromLocalStorage);
    cartItems=ctx.items;
    
   useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
   },[cartItems])

  useEffect(() => {

     if (authCtx.email) {
    // Remove "@" and "." from the email
    const sanitizedEmail = authCtx.email.replace(/[@.]/g, '');
    
     
    //Make a GET request to fetch user's cart items
    fetch(`https://ecommerce-5d078-default-rtdb.firebaseio.com/${sanitizedEmail}.json`)
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.cartItems);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
    }
  }, [authCtx.email]);




  // Calculate the total price of items in the cart
  const total = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const removeItemHandler = (itemId) => {
    ctx.removeItem(itemId);
    // Remove the item from local cartItems state
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    const product=cartItems.filter((item) => item.id === itemId);
  
    // Update Firebase cart items by sending the updated array
    if (authCtx.email) {
      const sanitizedEmail = authCtx.email.replace(/[@.]/g, "");
      fetch(
        `https://ecommerce-5d078-default-rtdb.firebaseio.com/${sanitizedEmail}/${cartItems.id}/${product.id}.json`,
        {
          method: "DELETE",
        
        headers: {
          "Content-Type": "application/json",
        },
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("Item deleted from Firebase");
          } else {
            console.error("Error deleting item from Firebase:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error deleting item from Firebase:", error);
        });
    }
  };
  

  return (
    <Modal {...props} onHide={props.onHide} size="lg">
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
                <Card.Img src={item.imageUrl} alt={item.title} style={{height:'100px',width:'100px'}} />
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
