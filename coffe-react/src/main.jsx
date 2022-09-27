import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/index";
import Menu from './pages/Menu/index';
import MenuComponents from "./pages/MenuComponents";
import Finish from "./pages/Finish";

import './style.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/components" element={<MenuComponents />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);
