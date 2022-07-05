import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, REGISTER_COMPLIMENT } from './types';

export function loginUser(dataToSubmit){
    const request = axios.post('/api/users/login', dataToSubmit)
                    .then(response => response.data)
    console.log(request);

        return{
            type: LOGIN_USER,
            payload: request
        }
}

export function registerUser(dataToSubmit){
    const request = axios.post('/api/users/register', dataToSubmit)
                        .then(response=>response.data)
        return{
            type:REGISTER_USER,
            payload:request
        }
}

export function auth(){
    const request = axios.get('/api/users/auth')
                        .then(response=>response.data)
        return{
            type:AUTH_USER,
            payload:request
        }
}

export function registerCompliment(dataToSubmit){
    const request = axios.post('api/users/write', dataToSubmit)
                        .then(response=>response.data)
        return{
            type: REGISTER_COMPLIMENT,
            payload:request
        }
}