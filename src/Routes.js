import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoggaIn from "./pages/LoggaIn";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/loggain" exact component={LoggaIn} />
  </Switch>;