import { combineReducers } from "redux";
import devices from './devices'
import auth from './auth'

const reducer = combineReducers({
    devices,
    auth
})

export default reducer