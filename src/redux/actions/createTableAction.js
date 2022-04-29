import * as actionTypes from "./actionTypes";

export function setCreateTable(table) {
    return { type: actionTypes.SET_CREATE_TABLE, payload: table };
}
