
import React from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../../components/components_lite/Footer"; // Adjust path if needed
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to JobNexus! This Privacy Policy explains how we collect, use, and protect your information while you enjoy our job portal services.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We collect personal information such as your name, email, phone number, and resume. Additionally, we may gather usage data including IP address, browser type, and pages you visit to improve your experience.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "Your data helps us provide and maintain our services, send updates, enhance our platform, respond to inquiries, and ensure your safety while using JobNexus.",
    },
    {
      title: "4. Data Security",
      content:
        "We implement robust security measures to safeguard your personal data against unauthorized access, modification, or disclosure. Your privacy is our priority.",
    },
    {
      title: "5. Sharing Your Information",
      content:
        "We never sell your data. It may only be shared with trusted service providers assisting us or as required by law.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, correct, or request deletion of your personal data. Simply contact us, and we’ll handle your request promptly.",
    },
    {
      title: "7. Contact Us",
      content: (
        <>
          If you have any questions or concerns regarding this Privacy Policy, feel free to reach out to us at{" "}
          <a
            href="mailto:support@jobnexus.com"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline transition-colors duration-300"
          >
            [support@jobnexus.com](mailto:support@jobnexus.com)
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Scrollable main content */}
      <main className="flex-grow overflow-y-auto max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12"
          >
            Privacy Policy - JobNexus
          </motion.h1>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.h2
                  whileHover={{ scale: 1.05, color: "#4F46E5" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-2xl font-semibold text-gray-800 mb-2 cursor-pointer"
                >
                  {section.title}
                </motion.h2>
                <motion.p className="text-gray-700 text-lg">{section.content}</motion.p>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
