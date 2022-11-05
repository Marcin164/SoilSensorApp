import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDevices } from "../../Services/devicesService";
import { Creators as DevicesActions, Types as DevicesTypes } from "../actions/devices"

function* fetchDevicesSaga():any {
    try {
        const devices:any = yield call(fetchDevices, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTQyYTI0MzFhMzR0Z2ZhenNhcyIsImlhdCI6MTY2NjkwNjQyMywiZXhwIjoxNjY2OTA3MzIzfQ.BxzCL70YTQGY_lTvWVixt-saj7VtJlSQsgq2iwzPNOc')
        yield put(DevicesActions.fetchSuccess(devices))
    } catch (error) {
        yield put(DevicesActions.fetchError(error))
    }
}

export default function* devicesSaga() {
    yield takeLatest(DevicesTypes.DEVICES_FETCH_START, fetchDevicesSaga)
}