import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from './../../assets/logo.png'
import './NavBar.css'
import { useRecoilValue } from "recoil";
import { userState } from "../../store/store";
import useAuthentification from "../../hooks/useAuthentification";

export default function NavBarJO() {

  const { logout } = useAuthentification();
  const { isConnected } = useRecoilValue(userState); 
  const handleLogout = () => {
    logout();
  }

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
            { !isConnected && <NavLink to="/login" className="mx-lg-3 mb-2 mb-lg-0">Connexion</NavLink>}
            { isConnected && <NavLink to="/" className="mx-lg-3 mb-2 mb-lg-0" onClick={handleLogout}>Déconnexion</NavLink>}
            { !isConnected && <NavLink to="/register" className="mx-lg-3 mb-2 mb-lg-0">Inscription</NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
