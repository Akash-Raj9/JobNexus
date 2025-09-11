
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto relative">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-3">
          Categories
        </h1>Navigate the World of Jobs with Ease
        <p className="text-gray-600 text-lg">.</p>
      </div>

      <Carousel className="w-full max-w-5xl mx-auto relative">
        <CarouselContent className="flex gap-6 px-10">
          {Category.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 relative">
              <Button
                onClick={() => searchjobHandler(category)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full max-w-[220px] px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md
                          hover:from-blue-600 hover:to-blue-800 hover:scale-105 hover:shadow-xl
                          transform transition-all duration-300 ease-in-out overflow-hidden relative"
                aria-label={category}
              >
                <div
                  className="whitespace-nowrap will-change-transform"
                  style={{
                    display: "inline-block",
                    animation:
                      hoveredIndex === index ? "scroll-text 5s linear infinite" : "none",
                  }}
                >
                  {category + " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 "}
                </div>

                {/* Popup on hover */}
                {hoveredIndex === index && (
                  <div
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-30 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-5 py-2 rounded-xl shadow-2xl
                               text-lg font-semibold whitespace-nowrap pointer-events-none
                               opacity-0 animate-fadeInScale animate-fill-forwards"
                    style={{ minWidth: "220px" }}
                  >
                    {category}
                  </div>
                )}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-blue-100 transition-colors duration-300 cursor-pointer z-20" />
        <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-blue-100 transition-colors duration-300 cursor-pointer z-20" />
      </Carousel>

      {/* Keyframe animations */}
      <style>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: translate(-50%, 0) scale(0.95); }
          100% { opacity: 1; transform: translate(-50%, -8px) scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.3s ease forwards;
        }
        .animate-fill-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Categories;
