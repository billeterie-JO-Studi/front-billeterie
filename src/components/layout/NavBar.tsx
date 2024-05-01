import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from './../../assets/logo.png'
import './NavBar.css'

export default function NavBarJO() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo JO" className="me-2"/>
          Billeterie JO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/ticket" className="mx-lg-3 mb-2 mb-lg-0">Billeterie</NavLink>
            <NavLink to="/market" className="mx-lg-3 mb-2 mb-lg-0"><i className="bi-cart me-1" /> Panier</NavLink>
            <NavLink to="/login" className="mx-lg-3 mb-2 mb-lg-0">Connexion</NavLink>
            <NavLink to="/" className="mx-lg-3 mb-2 mb-lg-0">Déconnexion</NavLink>
            <NavLink to="/register" className="mx-lg-3 mb-2 mb-lg-0">Inscription</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
