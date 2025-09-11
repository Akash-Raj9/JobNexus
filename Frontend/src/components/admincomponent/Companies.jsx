
import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer"; // Added Footer import
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/usegetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companyslice";
import { motion } from "framer-motion";

const Companies = () => {
  const navigate = useNavigate();

  useGetAllCompanies();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input, dispatch]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-tr from-blue-50 via-white to-indigo-100">
      {/* Navbar fixed at top */}
      <Navbar />

  <main className="flex-grow overflow-y-auto w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="my-10"
  >
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between mb-8 gap-4 sm:gap-0">
      <Input
        className="w-full sm:w-72"
        placeholder="Filter by Name"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        aria-label="Filter companies by name"
      />
      <Button
        onClick={() => navigate("/admin/companies/create")}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition duration-300 rounded-md px-6 py-3 whitespace-nowrap"
        aria-label="Add new company"
      >
        Add Company
      </Button>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
    >
      <CompaniesTable />
    </motion.div>
  </motion.div>
</main>


      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default Companies;
