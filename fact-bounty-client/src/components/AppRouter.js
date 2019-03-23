import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./common/PrivateRoute";
import Landing from "./containers/Landing";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Posts from "./containers/Posts";
import About from "./containers/About";
import NavBar from "./common/NavBar";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default AppRouter;
