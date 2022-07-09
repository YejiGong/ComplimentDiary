import api from './../Setting.js';
import {REGISTER_COMPLIMENT, COMPLIMENT_GET} from "./types.js";


export function registerCompliment(dataToSubmit){
    const request = api.post('/api/compliment/write', dataToSubmit)
                        .then(response=>response.data)
        return{
            type: REGISTER_COMPLIMENT,
            payload:request
        }
}

export function complimentGet(){
    const request = api.get('/api/compliment/record', {
        headers: {
            Authorization : window.localStorage.getItem('token')
        }
    })
                        .then(response=>response.data)
        return{
            type:COMPLIMENT_GET,
            payload:request
        }
}