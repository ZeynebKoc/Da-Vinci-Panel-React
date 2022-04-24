import { combineReducers } from "redux";
import getDateReducer from "./getDateReducer";
import getStartTimeReducer from "./getStartTimeReducer";
import getFinishTimeReducer from "./getFinishTimeReducer";

const rootReducer = combineReducers({
    getDateReducer,
    getStartTimeReducer,
    getFinishTimeReducer,
});

export default rootReducer;
