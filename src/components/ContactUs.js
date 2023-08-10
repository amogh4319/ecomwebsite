
import React from 'react';
import { Container,Card } from 'react-bootstrap';
import ContactForm from './ContactForm';

function ContactUs() {
    const addHandler=async (contactData)=>{
      const response=await  fetch('https://react-http-4aee6-default-rtdb.firebaseio.com/contactData.json',{
            method:'POST',
            body:JSON.stringify(contactData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json();
        console.log(data);
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '50vh' }}>
     <Card border="primary" style={{width:'20rem',marginLeft:'25%'}} className='shadow fluid'>
        
        <Card.Body>
          <Card.Title style={{fontFamily:'cursive',color:'blue'}}>Contact us</Card.Title>
          <Card.Text>
          Need to get in touch with us? Either fill out the form and get your inquiry cleared or find the department email you'd like to contact below.
          </Card.Text>
        </Card.Body>
      </Card>
      
      
      
      <Container>
        <ContactForm onAdd={addHandler}/>
      </Container>
    </div>
  );
}

export default ContactUs;
