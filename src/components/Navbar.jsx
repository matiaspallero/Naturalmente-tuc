import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style-component/navbar.css";

function NavbarPrincipal() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          Naturalmente
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#root" className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link href="#promos" className="nav-link">
              Productos
            </Nav.Link>
            <Nav.Link href="#nosotros" className="nav-link">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#contacto" className="nav-link">
              Contacto
            </Nav.Link>
            <Nav.Link href="#ayuda" className="nav-link">
              Ayuda
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;
