import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import MainPage from './MainPage';

function App() {
 
  return (
<Router>
    <nav>
      <Link className="link" to="/">Main Page</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/contact">Contact Us</Link>
    </nav>

    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactUs/>} />
    </Routes>
</Router>

  );
}

export default App;
