import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Pages/Home";
import Company from "./Pages/Company";
import Services from "./Pages/Services";
import Solutions from "./Pages/Solutions";
import Insights from "./Pages/Insights";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;