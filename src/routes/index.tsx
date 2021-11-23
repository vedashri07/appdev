import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import UnprotectedRoute from './UnprotectedRoute';

import Home from '../components/pages/home';
import FAQ from '../components/pages/faq';
import Dashboard from '../components/pages/dashboard';
import Discover from '../components/pages/discover';
import Login from '../components/pages/login';
import Branding from '../components/pages/branding';
import Profile from '../components/pages/profile';
import ProfileNew from '../components/pages/profilenew';
function Routes() {
  return (
    <Switch>
      <UnprotectedRoute exact authenticationPath="/dashboard" path="/" component={Home} />
      <UnprotectedRoute exact authenticationPath="/dashboard" path="/components" component={Home} />
      <ProtectedRoute exact authenticationPath="/login" path="/dashboard" component={Dashboard} />
      <UnprotectedRoute exact authenticationPath="/discover" path="/discover" component={Discover} />
      <Route exact path="/faq" component={FAQ} />
      <UnprotectedRoute exact authenticationPath="/dashboard" path="/login" component={Login} />
      <UnprotectedRoute exact authenticationPath="/brand" path="/Branding" component={Branding} />
      {/* <UnprotectedRoute exact authenticationPath="/dashboard" path="/dashboard" component={Dashboard} /> */}
      <UnprotectedRoute exact authenticationPath="/profile" path="/profile" component={Profile} />
      <UnprotectedRoute exact authenticationPath="/profilenew" path="/profilenew" component={ProfileNew} />

    </Switch>
  );
}

export default Routes;
