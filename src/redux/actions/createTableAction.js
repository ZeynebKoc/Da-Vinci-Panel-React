import * as actionTypes from "./actionTypes";

export function getCreateTable(table) {
    return { type: actionTypes.GET_CREATE_TABLE, payload: table };
}

export function setCreateTable(table) {
    return { type: actionTypes.SET_CREATE_TABLE, payload: table };
}
