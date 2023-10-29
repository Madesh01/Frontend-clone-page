
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Leads from '../../Components/Leads/Leads';

const Leadsdata = () => {
  const [user, setUsers] = useState([]);
  const [token] = useState(localStorage.getItem("token"));

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/leads/all", {
        headers: {
          Authorization: token,
        },
      });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="users">
      <h1 className="users_tittle">Leads Data</h1>
      <div className="users_container">
        {user.length === 0 ? (
          <div className="users_empty">
            <h1>No users found. Please add some.</h1>
            <h3>
              <Link to="/Addleads">Addleads</Link>
            </h3>
          </div>
        ) : (
          user.map((user) => {
            return (
              <Leads
                key={user._id}
                name={user.name}
                address={user.address}
                age={user.age}
                mobileNo={user.mobileNo}
                salesInfo={user.salesInfo}
              />
            );
          })
        )}
      </div>
    </div>
  )
}

export default Leadsdata;