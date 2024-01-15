import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as userServices from "../../services/UserServices";
import { auth } from "../../services/AuthServices";
import Dropdown from 'react-bootstrap/Dropdown';
const User = ()=>{
 const [userData, setUserData] = useState({});
 const [user, loading, error] = useAuthState(auth);   
 const navigate = useNavigate();

 useEffect(()=>{
    if(loading) return;
    if (!user) navigate("/page");
    userServices.getUserData(user,setUserData)
 },[user,loading, userData])

    return(
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{userData.name}</Dropdown.Item>
        <Dropdown.Item href="/">atsijungti</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      
    )
}

export default User