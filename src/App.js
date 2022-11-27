import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Icon } from "@iconify/react";
import Card from "./pages/Cards";
import MTGLogo from "../src/assets/MTGlogo.png";
import MainPage from "./pages/MainPage";
import Detail from "./pages/Detail";
import Random from "./pages/Random";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="HeaderLogo">
            <img src={MTGLogo} width="100px" height="auto"></img>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/random" element={<Random />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <NavLink to="/">
            <Icon icon="dashicons:admin-home" />
            <div className="link-text">Home</div>
          </NavLink>
          <NavLink to="/cards">
            <Icon icon="dashicons:tablet" hFlip={true} />
            <div className="link-text">Cards</div>
          </NavLink>
          <NavLink to="/random">
            <Icon icon="dashicons:randomize" />
            <div className="link-text">Random</div>
          </NavLink>
          <NavLink to="/about">
            <Icon icon="dashicons:info-outline" />
            <div className="link-text">About</div>
          </NavLink>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
