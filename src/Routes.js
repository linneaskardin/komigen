import AppliedRoutes from "./components/AppliedRoutes";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoggaIn from "./pages/LoggaIn";
import SkapaKonto from "./pages/SkapaKonto";
import ToolgateMaps from "./pages/ToolgateMaps";
import OmToolgateMaps from "./pages/OmToolgateMaps";
import Kontakt from "./pages/Kontakt";
import MinSida from "./pages/MinSida";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/loggain" exact component={LoggaIn} />
    <Route path="/skapakonto" exact component={SkapaKonto} />
    <Route path="/toolgatemaps" exact component={ToolgateMaps} />
    <Route path="/omtoolgatemaps" exact component={OmToolgateMaps} />
    <Route path="/kontakt" exact component={Kontakt} />
    <Route path="/minsida" exact component={MinSida} />
  </Switch>;
