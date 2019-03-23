import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../common/NavBar";

import Posts from "../../common/Posts";
import About from "../../containers/About";

class MainLayout extends Component {
  render() {
    return (
      <div className="mainLayout">
        <NavBar />
        <Route exact path={"/"} component={Posts} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default MainLayout;
