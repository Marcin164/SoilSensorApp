import { put, call, takeLatest, takeEvery } from "redux-saga/effects"
import { AuthActions, AuthTypes } from "../actions/auth"
import { AuthService } from "../../Services/authService"

function* signIn(data:any):any {
    try {
        const result:any = yield call(AuthService.login, data)
        console.log(result)

        localStorage.setItem("expires", result.expires)
        localStorage.setItem("accessToken", result.tokens.accessToken)
        localStorage.setItem("refreshToken", result.tokens.refreshToken)

        yield put(AuthActions.loginSuccess(result))
    } catch(error) {
        yield put(AuthActions.loginError(error))
    }
}

function* refreshToken() {
    //
}

function* signOut() {
    //
}

export default function* authSaga():any {
    yield takeEvery(AuthTypes.LOGIN_START, signIn)
}