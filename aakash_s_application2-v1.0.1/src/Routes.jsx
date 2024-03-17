import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Galileodesign = React.lazy(() => import("pages/Galileodesign"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/galileodesign" element={<Galileodesign />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
