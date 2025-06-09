import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Navbar from "./components/Navbar";

import './App.css';


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>     
    <div>
      <Navbar />
      <Footer />
    </div>
    </>
  )
}

export default App
