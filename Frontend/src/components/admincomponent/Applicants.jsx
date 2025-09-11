
import React, { useEffect } from "react";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";
import { motion } from "framer-motion";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_ENDPOINT}/${params.id}/applicants`,
          { withCredentials: true }
        );
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllApplicants();
  }, [params.id, dispatch]);

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
    <h1 className="font-bold text-3xl mb-6 text-blue-900">
      Applicants
    </h1>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
    >
      <ApplicantsTable />
    </motion.div>
  </motion.div>
</main>


      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default Applicants;
