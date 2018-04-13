import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./index.css";
import Routes from "./Routes";

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
          <LinkContainer to="/skapakonto">
              <NavItem>Skapa konto</NavItem>
            </LinkContainer>
            <LinkContainer to="/skapakonto">
              <NavItem>Skapa konto</NavItem>
            </LinkContainer>
            </Nav>
            <Nav pullRight>
            <LinkContainer to="/loggain">
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

 
