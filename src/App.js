
import { Container } from 'react-bootstrap';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';




function App() {


  return (
    <div className="App">
     
     <Container className='gradient-content-center'>
     <Navigation/>
      <Header/>
      <ProductList/>
     </Container>
    
      
    </div>
  );
}

export default App;
