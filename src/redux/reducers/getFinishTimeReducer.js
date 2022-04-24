import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    finish: "",
};

export default function getFinishTimeReducer(
    state = INITIAL_STATE.finish,
    action
) {
    switch (action.type) {
        case actionTypes.FINISH_TIME:
            return action.payload;
        default:
            return state;
    }
}
