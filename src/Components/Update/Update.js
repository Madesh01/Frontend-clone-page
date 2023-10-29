import React from 'react'
import "./Update.css";
import { Link } from 'react-router-dom';
const Update = ({id,name,age,mobileNo,address,salesInfo,updateUser}) => {
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
    <div className="user_button">
     <Link to={`/data/${id}`}>
     <button>Update</button>
     </Link>
    </div>
    </div>
  );
};

export default Update;