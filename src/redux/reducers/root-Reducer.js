import { combineReducers } from "redux";
import getDateReducer from "./getDateReducer";

const rootReducer = combineReducers({
    getDateReducer,
});

export default rootReducer;
