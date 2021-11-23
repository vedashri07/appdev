import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { getUserData } from '../utils/localStorageGetterSetter'

export type ProtectedRouteProps = {
  // isAuthenticated: boolean;
  authenticationPath?: string;
} & RouteProps;

export default function ProtectedRoute({ authenticationPath, ...routeProps }: ProtectedRouteProps) {
  if(getUserData()) {
    return <Route {...routeProps} component={routeProps.component} render={undefined} />
  } else {
    return <Redirect to={{ pathname: authenticationPath || '/login' }} />;
  }
};
