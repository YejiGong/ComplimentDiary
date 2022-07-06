import {combineReducers} from "redux";
import user from './user_reducer';
import compliment from './compliment_reducer';

const rootReducer = combineReducers({
    user,
    compliment
});

export default rootReducer;