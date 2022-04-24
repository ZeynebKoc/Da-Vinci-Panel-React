import { combineReducers } from "redux";
import getDateReducer from "./getDateReducer";
import getStartTimeReducer from "./getStartTimeReducer";

const rootReducer = combineReducers({
    getDateReducer,
    getStartTimeReducer,
});

export default rootReducer;
