  import React, { useEffect, useState } from 'react';
import './Addleads.css';
import axios from "axios";
const Addleads = () => {
const [userInfo, setUserInfo]= useState({
    name: "", 
    age: "",
    address: "",
    mobileNo: "",
    saleInfo: "",
  });
 
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

  const addUser =async()=>{
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
   const {data} = await axios.post("http://localhost:4000/leads/add",userInfo,{
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
           <button onClick={addUser}> Add User</button>
        </div>

      </div>  

    </div>
  );
};


export default Addleads;