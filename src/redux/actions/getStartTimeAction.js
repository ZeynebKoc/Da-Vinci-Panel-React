import * as actionTypes from "./actionTypes";

export function startTime(start) {
    return { type: actionTypes.START_TIME, payload: start };
}
