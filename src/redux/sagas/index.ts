import { fork } from "redux-saga/effects";
import imp from "./imp";


export function* rootSaga() {
    yield fork(imp);
}
