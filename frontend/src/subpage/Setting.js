import React, {useEffect} from 'react';
import Menu from './../components/Menu.js';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './Setting.css';
import { getLoginInfo } from '../_actions/user_action.js';
import api from './../Setting.js';
import { Navigate } from 'react-router';

function Setting(){
    function output(lists){
        const logoutHandler = () =>{
            api.get('/api/users/logout')
            .then(response => {
                if(response.data.success){
                    navigate('/')
                }else{
                    alert('로그아웃에 실패했습니다.')
                }
            })
        }
        if(lists!=null){
            return(
                <div>
                <div>id : {lists.id}</div>
                <br></br>
                <div>name : {lists.name}</div>
                <br></br>
                <div> email : {lists.email}</div>
                <br></br>
                <div><button onClick={logoutHandler}>log out</button></div>
                <br></br>
                </div>
            );
        }else{
            <div></div>
        }
    }
    const dispatch = useDispatch();
    var result={}
    result=useSelector(state=>state.user.userInfo);
    useEffect(()=>{
        dispatch(getLoginInfo());
    }, result)
    const navigate = useNavigate();
    
    return(
        <Menu>
            <div className="userInfo">
                {output(result)}
            </div>
        </Menu>
    );

}

export default Setting;
