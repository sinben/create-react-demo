import Imp from "../../models/imp";
import { ActionCreator } from 'redux';

export enum ImpActions {
  LIST_IMP = 'imp/list',
  LIST_IMP_SUCCESS = 'imp/list/success',
  LIST_IMP_ERROR = 'imp/list/error'
}

export interface ListImpAction { type: ImpActions.LIST_IMP }
export interface ListImpActionSuccess { type: ImpActions.LIST_IMP_SUCCESS, payload: { imps: Imp[] } }
export interface ListImpActionError { type: ImpActions.LIST_IMP_ERROR, payload: { error: string } }

export const listImps: ActionCreator<ListImpAction> = () => ({
    type: ImpActions.LIST_IMP
});
export const listImpsSuccess: ActionCreator<ListImpActionSuccess> = (payload: {imps: Imp[]}) => ({
    type: ImpActions.LIST_IMP_SUCCESS,
    payload
});
export const listImpsError: ActionCreator<ListImpActionError> = (payload: {error: string}) => ({
    type: ImpActions.LIST_IMP_ERROR,
    payload
});


export type Action = ListImpAction | ListImpActionSuccess | ListImpActionError