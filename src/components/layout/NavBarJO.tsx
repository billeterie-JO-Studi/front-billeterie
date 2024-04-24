import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function NavBarJO() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Billeterie JO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="ticket">Les Billets</NavLink>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar>
            <NavLink to="market"><i className="bi-cart" /> Panier</NavLink>
          </Navbar>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink to="/login">Connexion</NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
