import { combineReducers } from "redux";
import * as fromImps from './imp'

export interface State {
    imps: fromImps.State
}

export const initialState: State = {
    imps: fromImps.initialState
}

export const reducers = combineReducers<State>({
    imps: fromImps.reducer
})