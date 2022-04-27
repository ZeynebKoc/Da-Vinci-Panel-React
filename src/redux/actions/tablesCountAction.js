import * as actionTypes from "./actionTypes";

export function addTable(table) {
    return { type: actionTypes.ADD_TABLE, payload: table };
}