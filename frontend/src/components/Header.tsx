import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { StyledLink } from "./Product";

interface IProp {
  data: any;
}
export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Wrapper>
          <StyledLink to="/">
            <Navbar.Brand>Main Shop</Navbar.Brand>
          </StyledLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <StyledLink to="/cart">
                <FAIcon icon={faShoppingCart} />
                Cart
              </StyledLink>
              <StyledLink to="/login">
                <FAIcon icon={faUser} />
                Sign In
              </StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Wrapper>
      </Navbar>
    </header>
  );
};
const Wrapper = styled(Container)`
  & > .container  a {
    text-decoration: none;
  }
`;
const FAIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;
