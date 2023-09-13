import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "Components/skills/skills";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />
      <Skills/>
    </div>
  );
}

export default App;
