import React from 'react'
import "./Leads.css"
// import Updatedata from '../../Pages/Update/Updatedata';
const Leads = ({name,age,mobileNo,address,salesInfo}) => {
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
    </div>
  );
};

export default Leads;