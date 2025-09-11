
import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  // Navigate to details
  const goToDetails = () => navigate(`/description/${job._id}`);

  return (
    <motion.div
      onClick={goToDetails}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-6 rounded-xl bg-white border border-gray-200 
                 cursor-pointer flex flex-col justify-between
                 hover:border-blue-400 hover:shadow-lg
                 transition-all duration-300"
    >
      {/* Header */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">{job.name}</h1>
        <p className="text-sm text-gray-500">{job.location || "India"}</p>
      </div>

      {/* Body */}
      <div className="mt-3 flex-1">
        <h2 className="font-bold text-lg mb-2 text-gray-800">{job.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
      </div>

      {/* Badges */}
      <div className="flex gap-2 items-center mt-4 flex-wrap">
        <Badge className="bg-blue-600 text-white font-medium px-2 py-1 rounded-md">
          {job.position} Openings
        </Badge>
        <Badge className="bg-orange-500 text-white font-medium px-2 py-1 rounded-md">
          {job.salary} 
        </Badge>
        <Badge className="bg-purple-600 text-white font-medium px-2 py-1 rounded-md">
          {job.location}
        </Badge>
        <Badge className="bg-gray-700 text-white font-medium px-2 py-1 rounded-md">
          {job.jobType}
        </Badge>
      </div>

      {/* Details Button */}
      <motion.div
        className="mt-5"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToDetails();
          }}
          className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 
                     text-white rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 
                     transition font-medium"
        >
          View Details
        </button>
      </motion.div>
    </motion.div>
  );
};

export default JobCards;
