
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </Router>
    </>
  )
}

export default App
