import React, { useState } from 'react';

const AuthContext=React.createContext(
    {
        token:'',
        isLoggedIn:false,
        logIn:(token)=>{},
        logOut:()=>{},
        email:''
    }
)
export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token:');
    const initialEmail=localStorage.getItem('email:');

        const [token,setToken]=useState(initialToken);
        const [email,setEmail]=useState(initialEmail)
        const userIsLogedIn=!!token;
        setInterval(() => {
            const currentTime = new Date().getTime();
            const loginTime = parseInt(localStorage.getItem('loginTime:'));
            if (currentTime - loginTime > 300000) {
                logOutHandler();
            }
        }, 10000); // Check every 10 seconds
        
        const logInHandler=(token,email)=>{
            setToken(token);
            setEmail(email); // Make sure email is set correctly
            const currentTime = new Date().getTime();
            localStorage.setItem('token:', token);
            localStorage.setItem('email:', email); // Store email in local storage
            localStorage.setItem('loginTime:', currentTime);
        }
        const logOutHandler=()=>{
            setToken(null);
            localStorage.removeItem('token:');
            localStorage.removeItem('email:');
        }
        const contextValue={
            token:token,
            isLoggedIn:userIsLogedIn,
            logIn:logInHandler,
            logOut:logOutHandler,
            email:email
        }
        return (
            <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
        )
}
export default AuthContext;