import React from 'react';
import Menu from './../components/Menu.js'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerCompliment} from "./../_actions/user_action";

import './Write.css';

function Write(){

    const [txt, setTxt] = useState("")
    const onTxtHandler = (e) =>{
        setTxt(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }

    const dispatch = useDispatch()
    const onTxtSubmitHandler = (e) =>{
        e.preventDefault();

        let body = {
            compliment: txt,
        }

        dispatch(registerCompliment(body))
        .then(response=>{
            console.log(response.payload)
            if(response.payload.registerSuccess){
                //navigate('/')
            }else{
                alert('join Failed')
            }
        })
    }

    return(
        <Menu>
            <div className="writer_container">
            <div className="writer_input">
            <textarea type="text" id="input_comp" onClick={onTxtHandler}></textarea>
            </div>
            <div className="writer_submit">
            <form onClick={onTxtSubmitHandler}>
                <input type="submit" id="submit_comp" value="submit"></input>
            </form>
            </div></div>
        </Menu>
    );
};

export default Write;