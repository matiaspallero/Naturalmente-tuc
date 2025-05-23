import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";
import "../style-component/navbar.css";
import { Link } from "react-router";
import Catalogo from "../pages/Catalogo";

function NavbarPrincipal() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Link to="/Bienvenida" className="navbar-brand"> Naturalmente </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#root" className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link to="/Catalogo" href="#productos" className="nav-link">
              Productos
            </Nav.Link>
            <Nav.Link href="#nosotros" className="nav-link">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#ayuda" className="nav-link">
              Ayuda
            </Nav.Link>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Tooltip title="Comprar">
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;
