import { Reducer } from 'redux';
import { AppActions } from '../actions/app/appAction';
import { AppActionTypes } from '../actions/app/appTypes';

export interface IAppUserState {
  isAuthenticated: boolean,
  name: string,
}

export interface IAppState {
  property?: any;
  user?: IAppUserState,
}

const initialAppState: IAppState = {
  property: null
};

export const appReducer: Reducer<IAppState, AppActions> = (
  state = initialAppState,
  action
) => {
  switch (action.type) {
    case AppActionTypes.SET_USER: {
      return {
        ...state,
        user: { ...action.userData }
      };
    }
    default:
      return state;
  }
};
