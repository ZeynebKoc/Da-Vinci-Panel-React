import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = new Date().toISOString().split("T")[0];

export default function getDateReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_DATE:
            return action.payload;
        default:
            return state;
    }
}
