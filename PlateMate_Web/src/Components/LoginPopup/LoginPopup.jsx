import React,{ useState } from 'react'
import './LoginPopup.css'
//import { useState } from "react";
import { assets } from '../../assets/frontend_assets/assets';
import axios from 'axios';


const LoginPopup = ({setShowLogin}) => {

const [currState,setCurrState] = useState("Login")

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");


function signUp(){
if(currState==="Sign Up"){
  axios.post(`http://localhost:3000/users-managment/sign-up`, { userName: userName,password:password,email:email})
  .then(res => {
    alert("User create Successfully ")
    setCurrState("Login")
  })
}else{
  axios.post(`http://localhost:3000/users-managment/login`, { password:password,email:email})
  .then(res => {
    alert("User login Successfully ")
   // setCurrState("Login")
  }).error((err)=>{
    alert("User login failed")
  })
}
}
  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></> :<input  value={userName}  onChange={(e) => setUserName(e.target.value)}type="text"  placeholder="Your name" required />}
            
            <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" required />
            <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        </div>
        <button onClick={()=>signUp()}>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span> </p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
   }
        
      </div>
    </div>
  )
}

export default LoginPopup
