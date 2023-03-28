import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../data/Pictures/Group 336.png";
import { RiShoppingCartLine, RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import "./Navigation.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "../../Context/CartProvider";
import { useAuth } from "../../Context/AuthProvider";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [boxShadow, setBoxShadow] = useState(false);
  const userData = useAuth();
  const { cart } = useCart();

  const hamburgerMenuHandler = () => {
    setOpen(!open);
  };

  const changeNavbarBoxShadow = () => {
    if (window.scrollY >= 80) {
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBoxShadow);

  return (
    <Navbar
      expand="md"
      className={boxShadow ? "navigation scrollNavbar" : "navigation"}
    >
      <Container>
        <NavLink to="/cart" className="cartShopping">
          <RiShoppingCartLine className="cartLogo" />
          <span>{cart.length}</span>
        </NavLink>
        <Navbar.Brand href="#home">
          <div className="plantShopLogo">
            <img src={logo} alt="logo" />
            <p className="plant">Plant</p>
            <p className="shopping">Shopping</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={hamburgerMenuHandler}
        >
          {!open ? <RiMenu3Fill /> : <RiCloseLine />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" dir="rtl">
          <Nav className="me-auto align-items-md-center d-flex justify-content-between">
            {userData ? (
              <section className="text-center my-2 my-md-0 userName text-white">
                {userData.name}
                <span className="ms-2">عزیز خوش آمدید</span>
              </section>
            ) : (
              <section className="d-flex flex-column flex-md-row">
                <LinkContainer to="/login">
                  <Nav.Link className="authentication-button mt-3 mt-md-0">
                    <button className="loginButton">Sign in</button>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signUp">
                  <Nav.Link className="authentication-button ">
                    <button className="signUp">Sign up</button>
                  </Nav.Link>
                </LinkContainer>
              </section>
            )}
            <section className="d-flex flex-column flex-md-row menuItem ms-md-5">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
            </section>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
