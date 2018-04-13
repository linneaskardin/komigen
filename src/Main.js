import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./index.css";
import Routes from "./Routes";


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
        <div className="App container">
          <Navbar fluid collapseOnSelect>
          <Navbar.Collapse>
          <Nav>

          <LinkContainer exact to="/">
              <NavItem>Hem</NavItem>
            </LinkContainer>
          <LinkContainer to="/signup">
              <NavItem>Skapa konto</NavItem>
            </LinkContainer>
            </Nav>
            <Nav pullRight>
            <LinkContainer to="/LoggaIn">
              <NavItem>Logga In</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Routes />
        </div>
      );
    }
  }
  export default Main;

 
