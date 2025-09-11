
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const searchjobHandler = () => {
    if (!query.trim()) return;
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <header
      className={`bg-white py-20 px-6 sm:px-12 lg:px-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold select-none shadow-md mb-6">
          <PiBuildingOfficeBold className="w-6 h-6" />
          Jobs Meet Talent, Dreams Become Reality
        </span>

        {/* Headline */}
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 max-w-3xl mx-auto leading-tight">
            <span className="text-indigo-700"> Apply Confidently, </span> Advance Professionally &amp; Succeed Always
        </h1>


        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            JobNexus connects talent with opportunity — explore tailored roles in your domain, apply with ease, and accelerate your journey to a rewarding career.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchjobHandler();
          }}
          className="mt-10 w-full max-w-xl mx-auto"
          role="search"
          aria-label="Job search form"
        >
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md w-full overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              aria-label="Search job"
              className="flex-grow px-5 py-3 text-base text-gray-700 bg-white outline-none border-none placeholder-gray-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  searchjobHandler();
                }
              }}
            />
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full text-white shadow-md"
              aria-label="Submit job search"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
