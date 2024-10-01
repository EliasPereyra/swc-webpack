import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import MainApp from "./App";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);