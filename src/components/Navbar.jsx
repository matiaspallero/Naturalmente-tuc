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
            <Nav.Link href="#home" className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Productos
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Contacto
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Ayuda
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;
