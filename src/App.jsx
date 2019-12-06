import React from "react";
import "./App.css";
import NavBar from "containers/navBar/navBar";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";

function App() {
  return (
    <div className="container container--fluid">
      <NavBar />
      <div className="scrolling-box">
        <Training />
        <Trainer />
        <Program />
      </div>
    </div>
  );
}

export default App;
