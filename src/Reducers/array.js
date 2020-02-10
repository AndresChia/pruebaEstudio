import { SET_ARRAY } from './../Actions/index'

export const array = (state = {}, action) => {
    switch (action.type) {
        case SET_ARRAY:
            return action.value ;
        default:
            return state;
    }
}