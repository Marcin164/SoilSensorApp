import { call } from "redux-saga/effects"

export const withToken = (saga: any, ...args:any) => {
  return function* (action:any) {
    // const authorization = yield call(refreshTokenService)
    // yield call(saga, ...args, authorization.token, action)
  }
}