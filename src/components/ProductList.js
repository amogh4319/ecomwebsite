// ProductList.js
import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductContext from "../store/product-context";
import Header from "./Header";
import { Link } from "react-router-dom";
const ProductList = (props) => {
  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(ProductContext);

  const quantityChangeHandler = (event) => {
    setQuantity(+event.target.value);
  };

  const addItemToCartHandler = (item) => {
    ctx.addItem({ ...item, quantity });
  };

  return (
    <>
    <Header/>
    <Container className="gredient-content-center">
        
        <h1 style={{textAlign:'center'}}><b>MUSIC</b></h1>
      <Row xs={2} md={2} className="mb-3"style={{marginLeft:'16%'}}>
        {props.products.map((product) => (
          
          <Col key={product.title} className="mt-5">
            <Card style={{ width: "300px" }} className="shadow" border="success">
              <Card.Title style={{ textAlign: "center" }}>
                {product.title}
              </Card.Title>
              <Card.Img src={product.imageUrl} alt={product.title} />
              <Card.Footer >
                Price: {product.price}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {/* <input
                    type="number"
                    value={quantity}
                    onChange={quantityChangeHandler}
                    style={{ width: "20%" }}
                  /> */}
                   <Link to={`/store/${product.id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green" class="bi bi-info-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></Link>
                  <Button onClick={() => addItemToCartHandler(product)}>
                    Add to Cart
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default ProductList;
