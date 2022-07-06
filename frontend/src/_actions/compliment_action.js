import axios from 'axios';
import {REGISTER_COMPLIMENT, COMPLIMENT_GET} from "./types.js";


export function registerCompliment(dataToSubmit){
    const request = axios.post('/api/compliment/write', dataToSubmit)
                        .then(response=>response.data)
        return{
            type: REGISTER_COMPLIMENT,
            payload:request
        }
}

export function complimentGet(){
    const request = axios.get('/api/compliment/record')
                        .then(response=>response.data)
        return{
            type:COMPLIMENT_GET,
            payload:request
        }
}