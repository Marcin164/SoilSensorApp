import { AuthTypes } from "../actions/auth";

const reducer = (state = '', action:any) => {
    switch (action.type) {
        case AuthTypes.LOGIN_SUCCESS:
            return action.data
        case AuthTypes.LOGIN_ERROR:
            return action.error
        default:
            return state
    }
}

export default reducer