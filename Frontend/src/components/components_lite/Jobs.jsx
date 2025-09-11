
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const navigate = useNavigate();

  // Helpers
  const parseYears = (exp) => {
    if (!exp) return null;
    const num = exp.match(/\d+/);
    return num ? parseInt(num[0]) : null;
  };

  const parseSalary = (sal) => {
    if (!sal) return null;
    const num = sal.toString().replace(/[^0-9]/g, "");
    return num ? parseInt(num) : null;
  };

  // Filtering
  useEffect(() => {
    if (!searchedQuery || Object.values(searchedQuery).every((val) => val === "")) {
      setFilterJobs(allJobs);
      return;
    }

    const filteredJobs = allJobs.filter((job) => {
      let matches = true;

      // Location
      if (
        searchedQuery.Location &&
        !job.location?.toLowerCase().includes(searchedQuery.Location.toLowerCase())
      ) {
        matches = false;
      }

      // Technology
      if (
        searchedQuery.Technology &&
        !job.title?.toLowerCase().includes(searchedQuery.Technology.toLowerCase())
      ) {
        matches = false;
      }

      // Experience
      if (searchedQuery.Experience) {
        const jobExp = parseYears(job.experience);
        if (jobExp !== null) {
          if (searchedQuery.Experience === "0-3 years" && !(jobExp >= 0 && jobExp <= 3)) matches = false;
          else if (searchedQuery.Experience === "3-5 years" && !(jobExp >= 3 && jobExp <= 5)) matches = false;
          else if (searchedQuery.Experience === "5-7 years" && !(jobExp >= 5 && jobExp <= 7)) matches = false;
          else if (searchedQuery.Experience === "7+ years" && !(jobExp >= 7)) matches = false;
        }
      }

      // Salary
      if (searchedQuery.Salary) {
        const jobSalary = parseSalary(job.salary);
        if (jobSalary !== null) {
          if (searchedQuery.Salary === "0-50k" && !(jobSalary >= 0 && jobSalary <= 50000)) matches = false;
          else if (searchedQuery.Salary === "50k-100k" && !(jobSalary > 50000 && jobSalary <= 100000)) matches = false;
          else if (searchedQuery.Salary === "100k-200k" && !(jobSalary > 100000 && jobSalary <= 200000)) matches = false;
          else if (searchedQuery.Salary === "200k+" && !(jobSalary > 200000)) matches = false;
        }
      }
      return matches;
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-tr from-blue-50 via-white to-indigo-100">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content: flexes and scrolls to fill all space between navbar & footer */}
      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full px-6 lg:px-10 py-8">

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/5 max-h-full overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100"
          aria-label="Job Filters"
        >
          <FilterCard />
        </motion.aside>

        {/* Jobs list */}
        <main className="flex-1 flex flex-col h-full">
          <header className="flex justify-between items-center mb-4">
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-blue-900"
            >
              Available Jobs
            </motion.h2>
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-blue-600">{filterJobs.length}</span>{" "}
              {filterJobs.length === 1 ? "job" : "jobs"}
            </p>
          </header>

          <section className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 pr-2">
            <AnimatePresence>
              {filterJobs.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-64 text-gray-500 text-xl"
                >
                  No jobs found. Try changing filters.
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filterJobs.map((job) => (
                    <motion.article
                      key={job._id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => navigate(`/description/${job._id}`)}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 12px 24px rgba(59, 130, 246, 0.3)",
                        backgroundColor: "#e0e7ff",
                      }}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") navigate(`/description/${job._id}`);
                      }}
                      className="cursor-pointer rounded-2xl shadow-lg p-6 bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      <Job1 job={job} />
                    </motion.article>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>
      </div>

      {/* Footer pinned at bottom, always visible */}
      <Footer />
    </div>
  );
};

export default Jobs;
