
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Location: "",
    Technology: "",
    Experience: "",
    Salary: "",
  });

  const dispatch = useDispatch();

  const handleChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedFilters));
  }, [selectedFilters, dispatch]);

  return (
    <div className="w-full h-full bg-white rounded-md p-4 shadow-md border flex flex-col">
      <h1 className="font-bold text-xl text-blue-700">Filter Jobs</h1>
      <hr className="mt-3 mb-4" />

      {/* Make filter list scrollable inside */}
      <div className="flex-1 overflow-y-auto pr-2">
        {filterData.map((data, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold text-lg text-gray-800">{data.filterType}</h2>

            <RadioGroup
              value={selectedFilters[data.filterType]}
              onValueChange={(value) => handleChange(data.filterType, value)}
            >
              {data.array.map((item, indx) => {
                const itemId = `Id${index}-${indx}`;
                return (
                  <div key={itemId} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} id={itemId} />
                    <label htmlFor={itemId} className="cursor-pointer">
                      {item}
                    </label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
