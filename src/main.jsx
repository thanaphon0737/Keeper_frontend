import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Home/Dashboard.jsx";
import About from "./pages/About/About.jsx";
import Keeper from "./pages/Keeper/Keeper.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/about" element={<About />} />
        <Route path="/dashboard/keeper" element={<Keeper />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
