import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firbaseConfig";
import logo from "../../../imges/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar expand="lg" className="bg-orangered">
        <Container>
          <Navbar.Brand className="">
            <img src={logo} alt="car manager" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory" className="text-light">
                Manage Inventory
              </Nav.Link>
              {/* conditionaly show routes */}
              {user ? (
                <Nav.Link as={Link} to="/my_items" className="text-light">
                  My Items
                </Nav.Link>
              ) : (
                ""
              )}
              {user ? (
                <Nav.Link as={Link} to="/add_items" className="text-light">
                  Add Items
                </Nav.Link>
              ) : (
                ""
              )}
              <Nav.Link as={Link} to="/blog" className="text-light">
                Blog
              </Nav.Link>

              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="shadow-lg border-0 text-uppercase text-light fw-bold"
                  style={{ background: "#992900" }}
                >
                  Signout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login" className="text-light">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
