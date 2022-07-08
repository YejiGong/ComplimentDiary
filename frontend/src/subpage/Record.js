import React, {useEffect} from 'react';
import Menu from './../components/Menu.js'
import {useDispatch, useSelector} from "react-redux";
import {complimentGet} from "./../_actions/compliment_action";
import './Record.css';

function output(lists){
    if(lists!=null){
        let comp_list = lists.compliments_list
        console.log(comp_list, comp_list.length)
        if(comp_list.length>8){
            comp_list=comp_list.map(item=>item).slice(-8);
        }
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
            <div className="wholePages">
            {output(result)}
            </div>
        </Menu>
    );

}

export default Record;