import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ToolgateMaps from "./pages/ToolgateMaps";
import Kontakt from "./pages/Kontakt";
import OmToolgateMaps from "./pages/OmToolgateMaps";
import Fragor from "./pages/Fragor";
import SkapaKonto from "./pages/SkapaKonto";
import MinSida from "./pages/MinSida";
import LoggaIn from "./pages/LoggaIn";

export default () =>
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/toolgatemaps" component={ToolgateMaps}/>
<Route path="/kontakt" component={Kontakt}/>
<Route path="/omtoolgatemaps" component={OmToolgateMaps}/>
<Route path="/fragor" component={Fragor}/>
<Route path="/minsida" component={MinSida}/>
<Route path="/loggain" component={LoggaIn}/>      
</Switch>;