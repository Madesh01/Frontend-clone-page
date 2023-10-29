import React, { useEffect } from 'react'
import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Leadsdata from './Pages/Leads/Leadsdata';
import Updatedata from './Pages/Update/Updatedata';
import Removedata from './Pages/Remove/Removedata';
import Navbar from './Components/Navbar';
import Error from './Pages/Error/Error';
import Addleads from './Pages/Add leads/Addleads';
import PrivateRoute from './Components/PrivateRoute';
import { handleLogin } from './Pages/slices/user';
import { useDispatch } from 'react-redux';
import Data from './Components/Data/Data';
const App = () => {
const dispatch = useDispatch();
useEffect(()=>{
  let token = localStorage.getItem("token");
  if(token){
    dispatch(handleLogin(token));
  }
},[]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />} >
        <Route path="/Addleads" element={<Addleads />} />
        <Route path="/Leadsdata" element={<Leadsdata />} />
        <Route path="/Updatedata" element={<Updatedata />} />
        <Route path="/Removedata"  element={<Removedata />} />
        <Route path="/data/:id"   element={<Data />} />
        </Route>
        <Route path="/Login" element={<Login />} />

        <Route path="*"  element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App