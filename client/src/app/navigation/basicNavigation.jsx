import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import WelcomePage from '../modules/WelcomePage';
import Navbar from '../modules/NavBar';
import Footer from '../modules/Footer';
import Login from '../modules/Login';
import Register from '../modules/Register';

const index = ({ props }) => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/login" render={() => <Login props={props} />} />
        <Route path="/register" render={() => <Register props={props} />} />
        <Route path="/" render={() => <WelcomePage props={props} />} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default index;
