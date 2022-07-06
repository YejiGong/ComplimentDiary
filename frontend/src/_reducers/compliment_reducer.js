import {REGISTER_COMPLIMENT, COMPLIMENT_GET} from "../_actions/types.js";

export default function(state={}, action){
    switch (action.type) {
        case COMPLIMENT_GET:
            return {...state, complimentData: action.payload}
            break;
        case REGISTER_COMPLIMENT:
            return {...state, complimentSuccess: action.payload}
            break;
        default:
            return state;
    }
}