import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IAppState, IAppUserState } from '../../reducers/appReducer';
import { AppActionTypes } from './appTypes'

export interface IAppAnyAction {
  type: AppActionTypes.SET_USER;
  userData: IAppUserState;
}

export type AppActions = IAppAnyAction;

export const setUserDataAction: ActionCreator<ThunkAction<Promise<any>, IAppState, null, IAppAnyAction>> = (data) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        userData: data,
        type: AppActionTypes.SET_USER,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
