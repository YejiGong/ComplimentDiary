import React, {useEffect} from 'react';
import Menu from './../components/Menu.js'
import {useDispatch, useSelector} from "react-redux";
import './Setting.css';
import { getLoginInfo } from '../_actions/user_action.js';

function Setting(){
    function output(lists){
        if(lists!=null){
            return(
                <div>
                <div>id : {lists.id}</div>
                <br></br>
                <div>name : {lists.name}</div>
                <br></br>
                <div> email : {lists.email}</div>
                <br></br></div>
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
    return(
        <Menu>
            <div className="userInfo">
                {output(result)}
            </div>
        </Menu>
    );

}

export default Setting;
