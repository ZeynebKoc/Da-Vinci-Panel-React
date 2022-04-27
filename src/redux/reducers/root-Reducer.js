import { combineReducers } from "redux";
import getDateReducer from "./getDateReducer";
import tablesCountReducer from "./tablesCountReducer";

const rootReducer = combineReducers({
    getDateReducer,
    tablesCountReducer,
});

export default rootReducer;
