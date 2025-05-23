import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Bienvenida from "./pages/Bienvenida";
import Catalogo from "./pages/Catalogo";
import "./components/BotonFlotante.jsx";

const App = () => {
  return (
    <div className="body">
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </div>
  );
};

export default App;
