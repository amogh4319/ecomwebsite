import React from "react";
import { Container,Card } from "react-bootstrap";
const Header=()=>{
    return (
        <Container className="mb-3" >
            <Card bg="secondary">
                <Card.Body>
                <h1 className="text-center">The Generics</h1>
                </Card.Body>
            </Card>
            
        </Container>
    )
}
export default Header;