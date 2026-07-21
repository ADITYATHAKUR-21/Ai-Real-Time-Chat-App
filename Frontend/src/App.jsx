import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import AuthModal from "./components/AuthModal";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [authMode, setAuthMode] = useState(null);
  // null | "login" | "signup"

  return (
    <>
      <Navbar setAuthMode={setAuthMode} />

      <AuthModal authMode={authMode} setAuthMode={setAuthMode} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
