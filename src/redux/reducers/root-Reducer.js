import { combineReducers } from "redux";
import getDateReducer from "./getDateReducer";
import tablesCountReducer from "./tablesCountReducer";
import createTableReducer from "./createTableReducer";

const rootReducer = combineReducers({
    getDateReducer,
    tablesCountReducer,
    createTableReducer,
});

export default rootReducer;
