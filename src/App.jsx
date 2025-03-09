import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="body">
      <>
        <Navbar />
      </>
      <>
      <h1 className="titulo">Bienvenidos a Naturalmente Tucumán</h1>
      </>
    </div>
  );
};

export default App;
