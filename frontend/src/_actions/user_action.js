import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, GET_LOGIN_INFO} from './types';

export function loginUser(dataToSubmit){
    const request = axios.post('/api/users/login', dataToSubmit)
                    .then(response => response.data);

        return{
            type: LOGIN_USER,
            payload: request
        }
}

export function registerUser(dataToSubmit){
    const request = axios.post('/api/users/register', dataToSubmit)
                        .then(response=>response.data);
        return{
            type:REGISTER_USER,
            payload:request
        }
}

export function auth(){
    console.log(axios.defaults.baseURL)
    const request = axios.get('/api/users/auth')
                        .then(response=>response.data);
        return{
            type:AUTH_USER,
            payload:request
        }
}

export function getLoginInfo(){
    const request = axios.get('/api/users/info')
                        .then(response=>response.data)
        return{
            type:GET_LOGIN_INFO,
            payload:request
        }
}