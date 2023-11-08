import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Update from '../../Components/Update/Update';
const Updatedata= () => {
  const [user, setUsers] = useState([]);
  const [token] = useState(localStorage.getItem("token"));

  const getData = async () => {
    try {
      const { data } = await axios.get("https://backend-server-86us.onrender.com/leads/all", {
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

  const updateUser = async (id) => {
    try {
      const { data } = await axios.put(`https://backend-server-86us.onrender.com/leads/update/${id}`, {
        headers: {
          Authorization: token
        }
      });
      alert(data.msg);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users">
      <h1 className="users_tittle">Updated Data</h1>
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
              <Update
                key={user._id}
                id={user._id}
                name={user.name}
                address={user.address}
                age={user.age}
                mobileNo={user.mobileNo}
                salesInfo={user.salesInfo}
                updateUser={() => updateUser(user._id)}
              />
            );
          })
        )}
      </div>
    </div>
  )
}

export default Updatedata;