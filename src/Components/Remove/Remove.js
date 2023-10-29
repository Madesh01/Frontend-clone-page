import React from 'react'
import "./Remove.css";
const Remove= ({name,age,mobileNo,address,salesInfo,deleteUser}) => {
  return (
    <div className="user">
    <h3>
        Name:<span>{name} </span>
    </h3>
    <h3>
        Address:<span>{address} </span>
    </h3>
    <h3>
        Age:<span>{age} </span>
    </h3>
    <h3>
        MobileNo:<span>{mobileNo} </span>
    </h3>
    <h3>
        SaleInfo:<span>{salesInfo} </span>
    </h3>
    <div className="user_bottom">
    <button className="user_delete" onClick={deleteUser}>Delete</button>
    </div>
    </div>
  );
};

export default Remove;