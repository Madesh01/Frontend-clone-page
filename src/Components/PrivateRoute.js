import React, { useEffect, useState } from 'react'
import{useDispatch, useSelector}from "react-redux";
import { handleLogin } from '../Pages/slices/user';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const user=useSelector((state)=>state.userInfo.user);

    const [loading, setLoading] = useState(true);


    const dispatch=useDispatch();
    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token){
        dispatch(handleLogin(token));
      }
      setTimeout(()=>{
        setLoading(false);
      },500);
    },[]);
if(loading){
  return <h1>loading...</h1>
}
if(!user){
  return <Navigate to="/login" />

}
return <Outlet />;
};
export default PrivateRoute;