import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    table: {
        tableName: "",
        startTime: new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
        }),
        finishTime: "",
        playerCount: "",
        currentGame: "",
    },
};

export default function createTableReducer(
    state = INITIAL_STATE.table,
    action
) {
    switch (action.type) {
        case actionTypes.SET_CREATE_TABLE:
            return action.payload;
        default:
            return state;
    }
}