import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    tables: [],
};

export default function tablesCountReducer(
    state = INITIAL_STATE.tables,
    action
) {
    switch (action.type) {
        case actionTypes.ADD_TABLE:
            let newTable = action.payload;
            newTable = {
                ...newTable,
                id: Math.random(),
            };

            return [...state, newTable];
        default:
            return state;
    }
}
