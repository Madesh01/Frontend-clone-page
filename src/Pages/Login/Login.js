import "./Login.css";
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleLogin } from "../slices/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
 const dispatch = useDispatch();
const navigate = useNavigate();
const login=async()=>{
  const response = await axios.post("http://localhost:4000/users/login",{
    email,
    password,
  });
localStorage.setItem("token",response.data);
  dispatch(handleLogin(response.data));
  navigate("/Addleads");
  };

  return (
    <div className="home">
    <label>Email</label><br/>
    <input type="email"
    value={email} 
    onChange={(e)=>setEmail(e.target.value)}/>
    <br />
    <label>Password</label><br/>
    <input type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <button onClick={login}>Login</button>
    </div>
  )
};

export default Login;