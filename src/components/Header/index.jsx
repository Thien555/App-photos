import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import "./header.scss";
export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="https://reactstrap.github.io/components/navs/"
              className="header__link header__title"
              target="blank"
            >
              Reactstrap
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeclassname="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
