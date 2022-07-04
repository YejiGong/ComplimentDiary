import './Menu.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
function Menu(props){
    const navigate = useNavigate();
    return(
        <div class="containers">
            <div class="title">
                칭찬 일기
            </div>
            <div class="content">
                {props.children}
            </div>
            <div class="menu">
                <input type="submit" id="menu1" value="쓰기" onClick={()=>{navigate('/write')}}>
                </input>
                <input type="submit" id="menu2" value="기록">
                </input>
                <input type="submit" id="menu3" value="광장">
                </input>
                <input type="submit" id="menu4" value="설정">
                </input>
            </div>
        </div>
    );
}

export default Menu;