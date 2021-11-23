import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AuthLayout from './components/pages/authLayout';
import AppShell from './layout/AppShell';
import Routes from './routes';
import { MenuProvider } from './contexts/MenuProvider';
import configureStore from './store/store';

import './App.scss';
import './styles/global.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthLayout>
          <AppShell>
            <Routes />
          </AppShell>
        </AuthLayout>
      </Router>
    </Provider>
  );
}

export default App;
