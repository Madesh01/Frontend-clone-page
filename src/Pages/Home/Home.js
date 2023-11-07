import "./Home.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
const[name, setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
let navigate = useNavigate();
const signup=async()=>{
  if(!name || !email|| !password){
 alert("Required all fields");
 return;
}
  try {
    const response = await axios.post("http://localhost:4000/users/signup",{
    name,
    email,
    password,
  }); 

  console.log(response);
  alert(response.data.msg);
  navigate("/Login");

  } catch (error) { 
    console.log(error)
  }
}

  return (
    <div className="home">
    <label>Name</label><br/>
    <input type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    <br/>
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
    <button onClick={signup}>SignUp</button> 
    </div>
  )
}
export default Home;