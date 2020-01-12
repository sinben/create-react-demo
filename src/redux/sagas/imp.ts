import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import service from "../../services/imp-service";

import {ImpActions} from '../actions/imp';
import {listImpsSuccess, listImpsError} from '../actions/imp';

function* fetchImps() {
    try {
        const result = yield call(service.list);
        const { data } = result;
        yield put(listImpsSuccess({imps : data}));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield put(listImpsError({error : error}));
    }
}
export default function* saga() {
    yield takeLatest(ImpActions.LIST_IMP, fetchImps);
}
