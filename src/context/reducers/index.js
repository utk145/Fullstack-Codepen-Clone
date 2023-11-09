import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";

const mineReducers = combineReducers({
    user: userAuthReducer
})

export default mineReducers;