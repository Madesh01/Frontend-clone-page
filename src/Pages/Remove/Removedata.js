 import React, { useEffect, useState } from 'react'
 import { Link } from "react-router-dom";
import Remove from '../../Components/Remove/Remove';
import axios from "axios";
const Removedata= () => {
  const [user, setUsers] = useState([]);
  const [token] = useState(localStorage.getItem("token"));

  const getData = async () => {
    try {
      const { data } = await axios.get("https://backend-server-86us.onrender.com/leads/all", {
        headers: {
          Authorization: token
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

  const deleteUser = async (id) => {
    try {
      const { data } = await axios.delete(`https://backend-server-86us.onrender.com/leads/delete/${id}`, {
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
      <h1 className="users_tittle">Removedata Data</h1>
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
              <Remove
                key={user._id}
                name={user.name}
                address={user.address}
                age={user.age}
                mobileNo={user.mobileNo}
                salesInfo={user.salesInfo}
                deleteUser={() => deleteUser(user._id)}
              />
            );
          })
        )}
      </div>
    </div>
  )
}

export default Removedata;