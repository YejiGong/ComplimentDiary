import api from './../Setting.js'
import { LOGIN_USER, REGISTER_USER, AUTH_USER, GET_LOGIN_INFO} from './types';

export function loginUser(dataToSubmit){
    const request = api.post('/api/users/login', dataToSubmit)
                    .then(response => response.data);

        return{
            type: LOGIN_USER,
            payload: request
        }
}

export function registerUser(dataToSubmit){
    const request = api.post('/api/users/register', dataToSubmit)
                        .then(response=>response.data);
        return{
            type:REGISTER_USER,
            payload:request
        }
}

export function auth(){
    const request = api.get('/api/users/auth')
                        .then(response=>response.data);
        return{
            type:AUTH_USER,
            payload:request
        }
}

export function getLoginInfo(){
    const request = api.get('/api/users/info',  {
        headers: {
            x_auth : window.localStorage.getItem('token')
        }
    })
                        .then(response=>response.data)
        return{
            type:GET_LOGIN_INFO,
            payload:request
        }
}