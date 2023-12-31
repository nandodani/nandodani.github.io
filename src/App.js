import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Navbar from "./components/NavBar/NavBar";
import Languages from "./components/Languages/Languages";

function App() {
  return (
    <div className="App">
      <div className="App-bg-effect">
        <Router>
          <header className="App-header">
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>
          </main>
        </Router>
        <footer className="App-footer">
          <Languages />
        </footer>
      </div>
    </div>
  );
}

export default App;
