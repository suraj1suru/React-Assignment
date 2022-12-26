import React from "react";
import '../login.css';
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';


function Login() {
  let navigate = useNavigate();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");


  const LoggedIn = () => {
    if(password.length >= 4 && email.length >= 4){
      navigate("/dashboard")
    }else{
      <div>Please enter more than 4 Letter</div>
      navigate("/")
    }
  }


console.log(email , password)
  return (
    <div  >
     
      <form className="App">
        <h3>Sign In</h3>
        <div >
          <label>Email</label>
          <input
          minLength={4}
           
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
          
        </div>
        <div >
          <label>Password</label>
          <input
            type="password"
            minLength={4} 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
      
      
       <br />
        <div >
          <button  className="btn btn-primary" onClick={LoggedIn}>
            Submit
          </button>
        </div>
       
      </form>
    </div>
  );
}

export default Login;

// onClick={()=> {navigate("/dashboard")}}