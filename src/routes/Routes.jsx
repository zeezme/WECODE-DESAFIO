import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import {
  Department1,
  Department2,
  Department3,
  Department4,
  Department5,
  Department6,
} from "../pages/Departments";

import { AboutUs, SeeMore, OurGroup } from "../pages/Banners";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/department1" element={<Department1 />} />
      <Route path="/department2" element={<Department2 />} />
      <Route path="/department3" element={<Department3 />} />
      <Route path="/department4" element={<Department4 />} />
      <Route path="/department5" element={<Department5 />} />
      <Route path="/department6" element={<Department6 />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/seemore" element={<SeeMore />} />
      <Route path="/ourgroup" element={<OurGroup />} />
    </Routes>
  );
}
