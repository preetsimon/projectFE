import React from "react";
import SmartHome from "pages/SmartHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>

        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<SmartHome />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
