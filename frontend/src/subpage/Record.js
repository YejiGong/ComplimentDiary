import React, {useEffect} from 'react';
import Menu from './../components/Menu.js'
import {useDispatch, useSelector} from "react-redux";
import {complimentGet} from "./../_actions/compliment_action";
import './Record.css';

function output(lists){
    if(lists!=null){
        const comp_list=lists.compliments_list.map(item=>item).slice(-3);
        return(
                    comp_list.map(item => (
                        <div className="pages">
                            {item}
                        </div>
                    ))
        );
    }else{
        <div></div>
    }
}
function Record(){
    const dispatch = useDispatch();
    var result=useSelector(state=>state.compliment.complimentData);
    useEffect(()=>{
        dispatch(complimentGet());
    },[]);
    return(
        <Menu>
            {output(result)}
        </Menu>
    );

}

export default Record;