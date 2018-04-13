import React, { Component } from "react";
import { Route , NavLink , HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import ToolgateMaps from "./pages/ToolgateMaps";
import Kontakt from "./pages/Kontakt";
import OmToolgateMaps from "./pages/OmToolgateMaps";
import Fragor from "./pages/Fragor";
import SkapaKonto from "./pages/SkapaKonto";
import MinSida from "./pages/MinSida";
import LoggaIn from "./pages/LoggaIn";

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Toolgate Maps</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Hem</NavLink></li>
                    <li><NavLink to="/toolgatemaps">Toolgate Maps</NavLink></li>
                    <li><NavLink to="/omtoolgatemaps">Om Toolgate Maps</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                    <li><NavLink to="/fragor">Frågor</NavLink></li>
                    <li><NavLink to="/minsida">Min Sida</NavLink></li>
                    <li><NavLink to="/loggain">Logga in</NavLink></li>
                </ul>
                <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/toolgatemaps" component={ToolgateMaps}/>
                <Route path="/kontakt" component={Kontakt}/>
                <Route path="/omtoolgatemaps" component={OmToolgateMaps}/>
                <Route path="/fragor" component={Fragor}/>
                <Route path="/minsida" component={MinSida}/>
                <Route path="/loggain" component={LoggaIn}/>      
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;