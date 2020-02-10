import { SET_IDENTIFICACION } from './../Actions/index'

export const identificacion = (state = {}, action) => {
    switch (action.type) {
        case SET_IDENTIFICACION:
            return action.value;
        default:
            return state;
    }
}