import {AUTH_USER, LOGIN_USER, REGISTER_USER, GET_LOGIN_INFO, LOGOUT_USER} from "./../_actions/types";

export default function(state={}, action){
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return {...state, registerSuccess: action.payload}
            break;
        case AUTH_USER:
            return {...state, userData: action.payload}
            break;
        case GET_LOGIN_INFO:
            return {...state, userInfo: action.payload}
            break;
        case LOGOUT_USER:
            return {...state, logoutSuccess: action.payload}
            break;
        default:
            return state;
    }
}