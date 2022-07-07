import React from 'react';
import Menu from './../components/Menu.js'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerCompliment} from "./../_actions/compliment_action";
import tokenCookie from "./Cookie.js"
import {useNavigate} from 'react-router-dom';
import './Plaza.css';

function Plaza(){

    const navigate = useNavigate();
    const [txt, setTxt] = useState("")
    const onTxtHandler = (e) =>{
        setTxt(e.currentTarget.value);
    }


    const dispatch = useDispatch()
    const onTxtSubmitHandler = (e) =>{
        e.preventDefault();
        const Token = tokenCookie('x_auth');

        let body = {
            token: Token,
            compliment: txt,
            toOthers: true,
        }

        dispatch(registerCompliment(body))
        .then(response=>{
            setTxt("")
            if(response.payload.success){
                navigate('/plaza')
            }else{
                alert('join Failed')
            }
        })
    }

    return(
        <Menu>
            <div className="writer_container">
            <div className="writer_input">
            <textarea type="text" id="input_comp" onChange={onTxtHandler} value={txt}>{txt}</textarea>
            </div>
            <div className="writer_submit">
            <form onClick={onTxtSubmitHandler}>
                <input type="submit" id="submit_comp" value="submit"></input>
            </form>
            </div></div>
        </Menu>
    );
};

export default Plaza;