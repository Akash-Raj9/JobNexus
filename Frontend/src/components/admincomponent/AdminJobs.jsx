import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllJAdminobs";
import { setSearchJobByText } from "@/redux/jobSlice";

import Footer from "../components_lite/Footer";
import { motion } from "framer-motion";



const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-tr from-blue-50 via-white to-indigo-100">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Scrollable main content */}
<main className="flex-grow overflow-y-auto w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="my-10"
  >
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between mb-8 gap-4 sm:gap-0">
      <Input
        className="w-full sm:w-96"
        placeholder="Filter by Name & Jobs"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        aria-label="Filter jobs by name or title"
      />
      <Button
        onClick={() => navigate("/admin/jobs/create")}
        className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition duration-300 rounded-md px-6 py-3"
        aria-label="Post a new job"
      >
        Post New Job
      </Button>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
    >
      <AdminJobsTable />
    </motion.div>
  </motion.div>
</main>


      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default AdminJobs;