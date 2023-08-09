import React, { useState } from 'react';
import {Card,Form,Button} from 'react-bootstrap';

function ContactForm(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');

    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    }
    const emailChangeHandler=(event)=>{
        setEmail(event.target.value);
    }
    const phoneChangeHandler=(event)=>{
        setPhone(event.target.value);
    }
    const submission=(event)=>{
        event.preventDefault();
        const contactData={
            name:name,
            email:email,
            phone:phone
        }
        props.onAdd(contactData);
    }

  return (
    <div>
      <Card style={{width:'20rem',marginLeft:'10%'}} className='shadow fluid' border='success'>
            <Card.Body>
            <Form onSubmit={submission} style={{width:'18rem'}} className='mb-3 mt-3'>
            <Form.Control type="text" placeholder="NAME"  className='mb-3' onChange={nameChangeHandler}/>
            <Form.Control type="email" placeholder="EMAIL" className='mb-3' onChange={emailChangeHandler}/>
            <Form.Control type="number" placeholder="PHONE NO" className='mb-3' onChange={phoneChangeHandler}/>
            <Button type="submit">Submit</Button>
            </Form>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ContactForm;
