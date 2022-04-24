import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = new Date().toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
});

export default function getStartTimeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.START_TIME:
            return action.payload;
        default:
            return state;
    }
}
