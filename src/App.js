import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ClickToLaunch from "./pages/ClickToLaunch";
import ClickToOn from "./pages/ClickToOn";
import Databases from "./pages/Databases";
import Monitoring from "./pages/Monitoring";
import Paths from "./pages/Paths";
import Terminal from "./pages/Terminal";
import TrainModels from "./pages/TrainModels";
import Websites from "./pages/Websites";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/launch" element={<ClickToLaunch />} />
            <Route path="/on" element={<ClickToOn />} />
            <Route path="/databases" element={<Databases />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/paths" element={<Paths />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/train-models" element={<TrainModels />} />
            <Route path="/websites" element={<Websites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
