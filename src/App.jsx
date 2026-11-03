import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/components/Navbar";
import Footer from "./common/components/Footer";
import HomePage from "./features/home/pages/HomePage";
import AboutPage from "./features/about/pages/AboutPage";
import ProductsPage from "./features/products/pages/ProductsPage";
import JobsPage from "./features/jobs/pages/JobsPage";
// import ContactPage from './features/contact/pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
