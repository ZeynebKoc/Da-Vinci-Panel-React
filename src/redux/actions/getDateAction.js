import * as actionTypes from "./actionTypes";

export function getDate(date) {
    return { type: actionTypes.GET_DATE, payload: date };
}
