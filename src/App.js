import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/main/Home";
import Hub from "./Pages/sub/Hub";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hub" element={<Hub />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
