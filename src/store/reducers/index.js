import { combineReducers } from "redux";
import authReducer from "./auth";
// import allUsers from "./allUsers";

export default combineReducers({ authReducer })