
import './App.css';
import {Button, Navbar,Nav,Badge} from 'react-bootstrap';
import Header from './components/Header';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
      <Navbar  bg="dark">
        <Navbar.Collapse className="justify-content-center">
          <Nav >
            <Nav.Item>
            <Nav.Link href="#home" style={{color:'white'}}><b>HOME</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#store" style={{color:'white'}}><b>STORE</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#about" style={{color:'white'}}><b>ABOUT</b></Nav.Link>
            </Nav.Item>
            
            
          </Nav>
           
        </Navbar.Collapse>
        
        <Navbar.Collapse className="d-flex justify-content-end">
          <Button variant='warning'>cart
          <Badge bg="secondary">0</Badge></Button>
           
        </Navbar.Collapse>
      </Navbar>
      
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
