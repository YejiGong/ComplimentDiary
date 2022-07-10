import './Main.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth, loginUser} from "./../_actions/user_action";
import {useNavigate} from 'react-router-dom';

function Login(props) {
  //for join, find pw modal
  const navigate=useNavigate();
  
  return (
    <div className="container">
      <div className="main">
        <div className="logo" style={{marginBottom:'3rem'}} >
          <img src={require("./../images/leaf_logo.png")}/>
        </div>
      </div>
      <div className="login" style={{marginLeft:'8rem'}} >
          <input type="submit" id="button" onClick={()=>navigate('/Write')} value="menu"></input>
      </div>
    </div>
      
  );
}

export default Login;
