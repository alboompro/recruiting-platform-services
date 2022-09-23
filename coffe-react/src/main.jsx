import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/index";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);
