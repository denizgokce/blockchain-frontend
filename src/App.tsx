import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <div className="main-container">
          <Route path="/" element={<Home />} />
          <Route path="/block/:hash" element={<Detail />} />
        </div>
      </Routes>
    </div>
  );
}

export default App;
