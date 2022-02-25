import * as actionTypes from "../actions/actionTypes";

export default function getDateReducer(state = "", action) {
    switch (action.type) {
        case actionTypes.GET_DATE:
            let getDate = new Date(
                getDate.getTime() - getDate.getTimezoneOffset() * 60000
            )
                .toISOString()
                .split("T")[0];
            return getDate;
        default:
            return state;
    }
}
