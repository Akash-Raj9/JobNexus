
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-700 select-none">
        <p className="mb-1 text-sm font-semibold">© 2025 JobNexus. All rights reserved.</p>
        <p className="mb-1 text-sm font-semibold">
          Powered by{" "}
          <a
            href="https://github.com/Akash-Raj9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 transition transform hover:scale-110 hover:shadow-lg hover:text-blue-700 rounded"
          >
            Akash Raj
          </a>
        </p>
        <p className="text-sm font-semibold space-x-4">
          <Link
            to={"/PrivacyPolicy"}
            className="inline-block text-gray-600 transition transform hover:scale-110 hover:shadow-lg hover:text-blue-600 rounded"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            to={"/TermsofService"}
            className="inline-block text-gray-600 transition transform hover:scale-110 hover:shadow-lg hover:text-blue-600 rounded"
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

