import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./common/PrivateRoute";
import Landing from "./containers/Landing";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Main from "./containers/Main";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component={Main} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default AppRouter;
