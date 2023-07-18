import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from "./Components/Pages/Projects";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
