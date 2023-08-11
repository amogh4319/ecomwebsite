import React,{useState,useContext} from 'react';
import {Form, FormControl,Card,Button} from 'react-bootstrap'
import AuthContext from '../store/auth-context';
import {useNavigate} from 'react-router-dom';


function Login(props) {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
//const [isLoggedIn,setLoggedIn]=useState(true);

const ctx=useContext(AuthContext);
const history=useNavigate();

const emailHandler=(event)=>{
    setEmail(event.target.value);
}
const passwordHandler=(event)=>{
    setPassword(event.target.value);
}
const sumbmitHandler=(event)=>{
    event.preventDefault();
   
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApZOZyokdnP6xNS0yBtL219NWl6D_G6Xw',{
        method:'POST',
        body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if(res.ok){
            return res.json();
        }
    }).then(data=>{
        ctx.logIn(data.idToken);
            
        history('/store');
    }).catch(err=>{
        alert(err.message);
    }

    )
}

  return (
    <div>
        <Card style={{width:'20rem',marginLeft:'40%',textAlign:'center'}} className='shadow fluid mt-5' border='success'>
            <Card.Body>
                <Form style={{width:'18rem',alignItems:'center'}} className='mb-3 mt-3' onSubmit={sumbmitHandler}>
                    <FormControl  type='email' placeholder='EMAIL' className='mb-3 mt-3' onChange={emailHandler}/>
                    <FormControl type='password' placeholder='PASSWORD' className='mb-3 mt-3'onChange={passwordHandler}/>
                    <Button type='submit'>LOG IN</Button>
                    
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Login;
