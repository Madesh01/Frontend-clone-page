import React, { useEffect, useState } from 'react';
import './Data.css';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
const Data= () => {
  const {id}=useParams();
  const navigate=useNavigate();
const [userInfo, setUserInfo]= useState({
    name: "", 
    age: "",
    address: "",
    mobileNo: "",
    saleInfo: "",
  });
  let token = localStorage.getItem("token");
  const getData = async()=>{
    try {
      const {data} = await axios.get(`https://backend-server-86us.onrender.com/leads/userid/${id}`,{
        headers:{
          Authorization:token
        }
      })
      console.log(data);
      setUserInfo({
        name:data.name,
        age:data.age,
        address:data.address,
        mobileNo:data.mobileNo,
        saleInfo:data.saleInfo

      })
    } catch (error) {
      console.log(error);
    }
  }
 useEffect(()=>{
  getData();
 },[]);

  useEffect(()=> {
    setUserInfo((currInfo)=>{ 
      return{
        ...currInfo,
      }
    });
  },[]);
 

  const handlechange=(event)=>{
const{name,value}= event.target;

setUserInfo((currInfo)=>{ 
  return{
    ...currInfo,
    [name]:value,
  };
});
  };

  const update =async()=>{
    if(!userInfo.name || 
      !userInfo.age || 
      !userInfo.address ||
      !userInfo.mobileNo ||
      !userInfo.saleInfo){
        alert("Please Enter all detailes");
        return;
      }
      let token = localStorage.getItem("token");
try {
   const {data} = await axios.put(`https://backend-server-86us.onrender.com/leads/update/${id} `,userInfo,{
    headers:{
      "Authorization":token
    }
   })
   alert(data.msg);
   
  setUserInfo({
    name: "", 
    age: "",
    address: "",
    mobileNo: "",
    saleInfo: "",
  }); 
  //  getData();

} catch (error) {
  console.log(error);
}

  };
  

  return (
    <div className="home">
      <div className="home_container">
        <div className='home_formcontainer'>
          <h1 className="home_title"> Add Leads Information</h1>
           <input type="name" name="name" placeholder="Enter users name" 
           value={userInfo.name} 
           onChange={handlechange}/>  <br />

           <input type="address" name="address" placeholder='Enter users address'
            value={userInfo.address}  onChange={handlechange}/>
           <br />
           <input type="number"  name="mobileNo" placeholder="Enter users mobileNo"
           value={userInfo.mobileNo} 
           onChange={handlechange}/><br />
           <input type="number" name="age" placeholder="Enter users age" 
           value={userInfo.age}  onChange={handlechange}/><br />

            <input type="text"  name="saleInfo" placeholder="saleInfo"
    value={userInfo.saleInfo} onChange={handlechange} /> <br /> 
           <button onClick={update}>Update Lead</button>
        </div>

      </div>  

    </div>
  );
};


export default Data;