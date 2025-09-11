
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-tr from-blue-50 via-white to-blue-100">
      {/* Navbar */}
      <Navbar />

      {/* Scrollable main section (between navbar & footer) */}
      <div className="flex-grow overflow-y-auto">
        <div className="max-w-7xl mx-auto py-10 px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg"
            >
              Explore Opportunities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-lg text-gray-600"
            >
              Showing{" "}
              <span className="font-semibold text-blue-600">{allJobs.length}</span>{" "}
              {allJobs.length === 1 ? "job" : "jobs"} matching your search
            </motion.p>
          </div>

          {/* Jobs Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {allJobs.map((job) => (
              <motion.div
                key={job._id}
                onClick={() => navigate(`/description/${job._id}`)}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 16px 24px rgba(37, 99, 235, 0.25)",
                }}
                className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer"
              >
                <Job1 job={job} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {allJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-xl text-gray-500">
                No jobs found. Try adjusting your search.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer always visible at bottom */}
      <Footer />
    </div>
  );
};

export default Browse;
