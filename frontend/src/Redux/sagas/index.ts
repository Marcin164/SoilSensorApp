import { all, spawn } from 'redux-saga/effects'
import authSaga from './auth'
import devicesSaga from './devices'

export default function* rootSaga():any{
    const sagas = [devicesSaga, authSaga]
    yield all(sagas.map((saga) => spawn(saga)))
}