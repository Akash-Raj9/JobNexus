
import React from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../../components/components_lite/Footer"; // Adjust if needed
import { motion } from "framer-motion";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to JobNexus. These Terms govern your use of our job portal services. By accessing our site, you agree to comply with these Terms.",
    },
    {
      title: "2. Acceptance of Terms",
      content:
        "Using our services means you accept these Terms. If you disagree with any part, please do not use our website.",
    },
    {
      title: "3. Changes to Terms",
      content:
        "We may modify these Terms at any time. Continued use of our site implies acceptance of the updated Terms.",
    },
    {
      title: "4. User Responsibilities",
      content:
        "Users must use the website lawfully and avoid infringing on others’ rights or disrupting their experience.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All content on JobNexus is owned or licensed by us. You may not reproduce or create derivative works without permission.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "JobNexus is not liable for any direct or indirect damages arising from your use of our services.",
    },
    {
      title: "7. Governing Law",
      content:
        "These Terms are governed by the laws applicable in India. Disputes fall under the exclusive jurisdiction of Indian courts.",
    },
    {
      title: "8. Contact Us",
      content: (
        <>
          Questions about these Terms can be sent to{" "}
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
            Terms of Service - JobNexus
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

export default TermsOfService;
