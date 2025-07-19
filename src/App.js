import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeLogin from "./pages/WelcomeLogin";
import VehicleInfo from "./pages/VehicleInfo";
import VirtualGarage from "./pages/VirtualGarage";
import VehicleDetails from "./pages/VehicleDetails";
import PartsPage from "./pages/PartsPage";
import RewardsPage from "./pages/RewardsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeLogin />} />
        <Route path="/vehicle-info" element={<VehicleInfo />} />
        <Route path="/virtual-garage" element={<VirtualGarage />} />
        <Route path="/vehicle-details" element={<VehicleDetails />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
