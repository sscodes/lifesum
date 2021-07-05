import { Container, Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState("EN");

  return (
    <Navbar>
      <Container fluid className="px-5">
        <Navbar.Brand href="#" className="navBrand pl-md-2 brand">
          LifeSum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">FEATURES</Nav.Link>
            <Nav.Link href="#action2">ARTICLES</Nav.Link>
          </Nav>
          <div className="btnTestdiv">
            <NavDropdown title={lang} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">EN</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                IT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                SP
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                GE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                JP
              </NavDropdown.Item>
            </NavDropdown>
          </div>
            <Nav.Link href="#" disabled>
              LOG IN
            </Nav.Link>
            <Button className="btnTest">
              <b>Sign Up</b>
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
