import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";
import { Link } from "react-router";
import "../style-component/navbar.css";

function NavbarPrincipal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkSharedClasses = "px-3 py-2 rounded-md text-sm font-medium";
  const desktopLinkClasses = `text-gray-700 hover:text-green-600 ${linkSharedClasses}`;
  const mobileLinkClasses = `block text-gray-700 hover:text-green-600 hover:bg-gray-50 ${linkSharedClasses}`;
  
  // Assuming hash links refer to sections on the Bienvenida page for robustness
  const basePath = "/Bienvenida"; 

  return (
    <nav className="!shadow-md !sticky !top-0 !z-50 bg-navFondo" id='navbar'>
      <div className="!max-w-7xl !mx-auto !px-4 !sm:px-6 !lg:px-8">
        <div className="!flex !items-center !justify-between !h-16">
          {/* Brand */}
          <Link to="/" className="!flex-shrink-0 font-bold text-2xl text-colorletra !hover:text-green-500" id='brand'>
            Naturalmente
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="!inline-flex items-center justify-center !p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none !focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="main-menu"
              aria-expanded={isMenuOpen}
              id='navbar-toggler'
            >
              <span className="!sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="!block !h-6 !w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="!block !h-6 !w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Items (Links + Cart) */}
          <div className="md:hidden xs:hidden sm:hidden !lg:flex gap-7 lg:flex !lg:items-center lg:ml-6 lg:space-x-4 text-4xl" id='desktop-nav'>
            <Link to="/" className={desktopLinkClasses} id='nav-links'> {/* Assuming #root means the homepage */}
              Inicio
            </Link>
            <Link to="/Catalogo" className={desktopLinkClasses} id='nav-links'>
              Productos
            </Link>
            <Link to={`${basePath}#nosotros`} className={desktopLinkClasses} id='nav-links'>
              Nosotros
            </Link>
            <Link to={`${basePath}#ayuda`} className={desktopLinkClasses} id='nav-links'>
              Ayuda
            </Link>
            {/* Cart Icon Box - Placed as the last item in the desktop nav group */}
            <Box
              sx={{
                display: "flex",
                // gap: 2, // Kept from original, useful if more items were in Box
                width: { xs: '50%', lg: 'auto' }, // Responsive width
                justifyContent: "center",
              }}
            >
            </Box>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} !lg:hidden !border-t !border-grey-200 !text-center`} >
        <div className="!px-2 !pt-2 !pb-3 !space-y-1 !sm:px-3">
          <Link to="/" className={mobileLinkClasses} id='nav-links-tog'>Inicio</Link>
          <Link to="/Catalogo" className={mobileLinkClasses} id='nav-links-tog'>Productos</Link>
          <Link to={`${basePath}#nosotros`} className={mobileLinkClasses} id='nav-links-tog'>Nosotros</Link>
          <Link to={`${basePath}#ayuda`} className={mobileLinkClasses} id='nav-links-tog'>Ayuda</Link>
        </div>
        {/* Cart Icon Box in Mobile Menu - Replicating original Box styling for mobile */}
        <div className="!border-t !border-green-200 !pt-3 !pb-3 !px-2 !sm:px-3">
          <Box
            className={{
              display: "flex",
              gap: 2, // Kept from original
              width: "100%", // Takes full width in mobile dropdown
              justifyContent: "center", // Centers the icon
              color: "0d5725",
            }}
          >
          </Box>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPrincipal;
