import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from "../Pages/slices/user";
const Navbar = () => {

  const user=useSelector((state)=>state.userInfo.user);

  const dispatch = useDispatch();

  const logout=()=>{
    dispatch(removeUser());
    localStorage.removeItem("token");
  };
  return (
    <div>
        <nav>
            <h1> Leads Management System</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/Addleads">LeadsAdd</Link>
                <Link to="/Leadsdata">LeadsList</Link>
                <Link to="/Data">UpdateAdd</Link>
                <Link to="/Updatedata">UpdateLead</Link>
                <Link to="/Removedata">Remove</Link>
                <div className='link'> { user ?  <p onClick={logout}>Logout</p>:<Link to="/Login">Login</Link>}
</div>
                {/* { user ?  <p onClick={logout}>Logout</p>:<Link to="/Login">Login</Link>} */}

            </ul>
        </nav>
    </div>
  )
}

export default Navbar;