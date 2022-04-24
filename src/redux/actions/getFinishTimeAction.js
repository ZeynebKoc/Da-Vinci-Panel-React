import * as actionTypes from "./actionTypes";

export function finishTime(finish) {
    return { type: actionTypes.FINISH_TIME, payload: finish };
}
