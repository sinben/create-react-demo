import {RemoteData} from "../../models/remote-data";
import {ImpActions, Action} from "../actions/imp";
import Imp from "../../models/imp";


export interface State {
  status: RemoteData,
  value: Imp[],
};
export const initialState: State = {
    status: RemoteData.NOT_ASKED,
    value: []
}


export function reducer(state = initialState, action: Action) {

  switch (action.type) {
    case ImpActions.LIST_IMP: {
      return {
        ...state,
        status: RemoteData.LOADING
      };
    }
    case ImpActions.LIST_IMP_SUCCESS: {
        const {imps} = action.payload;
        return {
            value : imps,
            status: RemoteData.SUCCESS
        };
    }
    default:
      return state;
  }
}