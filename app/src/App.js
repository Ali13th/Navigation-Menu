import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home Page/Home";
import Navigation from "./Components/Navigation/Navigation";
import Sample1 from "./Components/Sample-1 Page/Sample1";
import Sample2 from "./Components/Sample-2 Page/Sample2";
import Sample3 from "./Components/Sample-3 Page/Sample3";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sample1" element={<Sample1 />} />
          <Route exact path="/sample2" element={<Sample2 />} />
          <Route exact path="/sample3" element={<Sample3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
