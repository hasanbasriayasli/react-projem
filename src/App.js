import React, { useState } from "react";
import "./App.css";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./page/Home";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

