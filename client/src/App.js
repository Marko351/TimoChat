import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Imports for redux
import store from './app/reduxConfig/store';
import setAuthToken from './app/utils/setAuthToken';
import {
  setCurrentUser,
  logoutUser,
} from './app/modules/Register/redux/actions';

import GlobalStyle from './GlobalStyle.styled';
import BasicNavigation from './app/navigation/basicNavigation';

axios.defaults.baseURL = 'http://localhost:5500/api/v1';

let decoded = null;
//Check for token
if (localStorage.timoToken) {
  // Set headers
  setAuthToken(localStorage.timoToken);
  // Get user info and exp
  decoded = jwt_decode(localStorage.timoToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout User
    store.dispatch(logoutUser());
  }
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Switch>
        {/* <Route path="/www" render={(props) => <WelcomePage props={props} />} /> */}
        <Route path="/" render={(props) => <BasicNavigation props={props} />} />
      </Switch>
    </Provider>
  );
}

export default App;
