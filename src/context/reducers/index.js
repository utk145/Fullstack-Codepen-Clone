import { combineReducers } from "redux";
import allProjectsReducers from "./allProjectsReducers";
import userAuthReducer from "./userAuthReducer";

const mineReducers = combineReducers({
    user: userAuthReducer,
    projects:allProjectsReducers
})

export default mineReducers;