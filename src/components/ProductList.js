// ProductList.js
import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductContext from "../store/product-context";

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
    <Container>
      <Row xs={2} md={2} className="mb-3">
        {props.products.map((product) => (
          <Col key={product.title}>
            <Card style={{ width: "300px" }} className="shadow">
              <Card.Title style={{ textAlign: "center" }}>
                {product.title}
              </Card.Title>
              <Card.Img src={product.imageUrl} alt={product.title} />
              <Card.Footer>
                Price: {product.price}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <input
                    type="number"
                    value={quantity}
                    onChange={quantityChangeHandler}
                    style={{ width: "20%" }}
                  />
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
  );
};

export default ProductList;
