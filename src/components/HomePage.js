import React, { Component } from 'react';
import { Button, Card, CardImg, Col,Container,Row} from 'react-bootstrap';
import playImage from '../assets/play.png';


export default class HomePage extends Component {
  render() {
    return (
        <>
      <Container 
        style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center horizontally
            justifyContent: 'center', 
            // Center vertically
          }}
      >
        <h1 style={{fontFamily:'cursive'}}>HOME</h1>
        
            
                <Card.Body>
                    <Card className='mt-5'><b>Get our latest Album</b></Card>
                    <CardImg src={playImage} alt="play"/>
                </Card.Body>
           

            

        <h2 style={{fontFamily:'revert-layer'}}>TOURS</h2>
        
            <Card style={{ width: '75%', margin: '0 auto'}} className="bg-success p-2 text-dark bg-opacity-25 mb-3">
                <Card.Body>
                <Row>
                <Col>JUL16</Col>
                <Col>DETROIT, MI</Col>
                <Col>DTE ENERGY MUSIC THEATRE</Col>
                <Col><Button>BUY TICKETS</Button></Col>
                </Row>
                </Card.Body>
            
            </Card>
            <Card style={{ width: '75%', margin: '0 auto', backgroundColor: '#C5E1A5' }} className='bg-success p-2 text-dark bg-opacity-25 mb-3'>
                <Card.Body>
                <Row>
                <Col>JUL19</Col>
                <Col>TORONTO,ON</Col>
                <Col>BUDWEISER STAGE</Col>
                <Col><Button>BUY TICKETS</Button></Col>
                </Row>
                </Card.Body>
            
            </Card>
            <Card style={{ width: '75%', margin: '0 auto', backgroundColor: '#C5E1A5' }} className=' bg-success p-2 text-dark bg-opacity-25 mb-3'>
                <Card.Body>
                <Row>
                <Col>JUL 22</Col>
                <Col>BRISTOW, VA</Col>
                <Col>JIGGY LUBE LIVE</Col>
                <Col><Button>BUY TICKETS</Button></Col>
                </Row>
                </Card.Body>
            
            </Card>
            <Card style={{ width: '75%', margin: '0 auto', backgroundColor:'#C5E1A5' }} className='bg-success p-2 text-dark bg-opacity-25 mb-3'>
                <Card.Body>
                <Row>
                <Col>JUL 29</Col>
                <Col>PHOENIX, AZ</Col>
                <Col>AK-CHIN PAVILION</Col>
                <Col><Button>BUY TICKETS</Button></Col>
                </Row>
                </Card.Body>
            
            </Card>
            <Card style={{ width: '75%', margin: '0 auto', backgroundColor: '#C5E1A5' }} className='bg-success p-2 text-dark bg-opacity-25 mb-3'>
                <Card.Body>
                <Row>
                <Col>AUG 2</Col>
                <Col>LAS VEGAS, NV</Col>
                <Col>T-MOBILE ARENA</Col>
                <Col><Button>BUY TICKETS</Button></Col>
                </Row>
                </Card.Body>
            
            </Card>
            <Card style={{ width: '75%', margin: '0 auto', backgroundColor: '#C5E1A5' }} className='bg-success p-2 text-dark bg-opacity-25 mb-3'>
                <Card.Body>
                <Row>
                <Col>AUG 7</Col>
                <Col>CONCORD, CAZ</Col>
                <Col>CONCORD PAVILION</Col>
                <Col><Button>BUY TICKETS</Button></Col>
                </Row>
                </Card.Body>
            
            </Card>
           
      </Container>
      </>
    );
  }
}

