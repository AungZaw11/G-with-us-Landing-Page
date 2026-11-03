import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#0A2540] text-white pt-16 pb-6 px-6 lg:px-12 mt-auto">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 max-w-7xl mx-auto w-full mb-12">
        <div className="flex flex-col w-full md:w-[45%] lg:w-[40%]">
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
            G-WITHUS COMPANY LIMITED
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full md:w-[50%] lg:w-[50%] justify-between gap-8">
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <Link
              to="/about"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-2 sm:mt-9">
            <div className="flex flex-row items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>+95 987654321</span>
            </div>
            <div className="flex flex-row items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>support@gwithus.com</span>
            </div>
            <div className="flex flex-row items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@gwithus.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto pt-6 border-t border-gray-700">
        <p className="text-gray-500 text-xs">
          Copyright © 2026 PT. NAWASENA AMERTA EKSPORA. All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
