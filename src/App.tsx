/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // He cambiado BrowserRouter por HashRouter
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DeathSanitization from "./pages/services/DeathSanitization";
import TraumaSanitization from "./pages/services/TraumaSanitization";
import OdorSanitization from "./pages/services/OdorSanitization";
import InvisibleCleaning from "./pages/services/InvisibleCleaning";
import HardToReachDisinfection from "./pages/services/HardToReachDisinfection";
import BirdBlocker from "./pages/services/BirdBlocker";
import TechnicalCleaning from "./pages/services/TechnicalCleaning";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/tjanster" element={<Services />} />
        <Route path="/tjanster/sanering-dodstall" element={<DeathSanitization />} />
        <Route path="/tjanster/traumasanering" element={<TraumaSanitization />} />
        <Route path="/tjanster/luktsanering" element={<OdorSanitization />} />
        <Route path="/tjanster/invisible-cleaning" element={<InvisibleCleaning />} />
        <Route path="/tjanster/svaratkomliga-ytor" element={<HardToReachDisinfection />} />
        <Route path="/tjanster/bird-blocker" element={<BirdBlocker />} />
        <Route path="/tjanster/teknisk-rengoring" element={<TechnicalCleaning />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        {/* Esta línea de abajo es el "salvavidas" por si falla la ruta principal */}
        <Route path="*" element={<Home />} /> 
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
