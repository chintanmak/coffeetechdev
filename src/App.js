import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./Components/Pages/Projects";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import Discordinvite from "./Components/Pages/Discordinvite";
import Whycoffee from "./Components/Pages/Whycoffee";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Explore from "./Components/Pages/Explore";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='/whycoffee' element={<Whycoffee />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/discordinvite" element={<Discordinvite />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
