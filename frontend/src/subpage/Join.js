import './Join.css';
import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "./../_actions/user_action";
import {useNavigate} from 'react-router-dom';

function Join(props){
    
    const navigate=useNavigate();
    const [Id, setID] = useState("")
    const onIdHandler = (e) =>{
        setID(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }
    const [Pw, setPW] = useState("")
    const onPwHandler = (e) =>{
        setPW(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }
    const [Email, setEmail] = useState("")
    const onEmailHandler = (e) =>{
        setEmail(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }
    const [Name, setName] = useState("")
    const onNameHandler = (e) =>{
        setName(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }

    const dispatch = useDispatch()
    const onJoinHandler = (e) =>{
        e.preventDefault();

        let body = {
            id: Id,
            password: Pw,
            email: Email,
            name: Name
        }

        dispatch(registerUser(body))
        .then(response=>{
            console.log(response.payload)
            if(response.payload.registerSuccess){
                navigate('/')
            }else{
                alert('join Failed')
            }
        })
    }

    return(
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <div className="modal-title"> Join Our Site</div>
                <div className="form">
                    <label id="label" >Name</label>
                    <input type="text" id="input_form" onClick={onNameHandler}></input>
                    <br></br>
                    <label id="label" >ID</label>
                    <input type="text" id="input_form" onClick={onIdHandler}></input>
                    <br></br>
                    <label id="label" >PW</label>
                    <input type="text" id="input_form" onClick={onPwHandler}></input>
                    <br></br>
                    <label id="label" >Email</label>
                    <input type="text" id="input_form" onClick={onEmailHandler}></input>
                    <br></br>
                    <form id="submit" style={{display:'flex', flexDirection:'column'}} onSubmit={onJoinHandler}>
                        <input type="submit" id="submit_button" value="submit"></input>
                    </form>
                </div>
            </div>
    );
}

export default Join;