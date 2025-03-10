import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Bienvenida from "./pages/Bienvenida.jsx";

const App = () => {
  return (
    <div className="body">
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
      </Routes>
    </div>
  );
};

export default App;
