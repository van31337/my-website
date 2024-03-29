import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Projects, Resume, Contact } from "./pages/index";

import { Navbar, MatrixBackground } from "./components";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MatrixBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
