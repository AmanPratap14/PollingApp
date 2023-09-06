import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import { BrowserRouter as Router, Routes,} from 'react-router-dom';


import { store } from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';

import NavBar from './NavBar';
import RouteViews from './RouteViews';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <RouteViews />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
