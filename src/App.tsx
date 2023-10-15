import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "Components/skills/skills";
import Experience from "Components/Experience/Experience";
import Works from "Components/Works/Works";
import Contact from "Components/Contact";
import Footer from "Components/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Header />
      <Home />
      <Experience />
      <Skills />
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
