
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

// Update the path below to point to your logo image file
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/logout`,
        {},
        { withCredentials: true }
      );
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6 md:px-10">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 select-none">
          {/* Logo with hover effect */}
          <img
            src={logo}
            alt="JobNexus Logo"
            className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer"
          />
          {/* Brand text with gradient */}
          <h1 className="text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-indigo-700 via-blue-500 to-orange-400 bg-clip-text text-transparent">
            JobNexus
          </h1>
        </div>

        {/* Navigation Links + Auth Controls */}
        <div className="flex items-center gap-14">
          <ul className="flex font-semibold items-center gap-10 text-gray-700">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link
                    to={"/admin/companies"}
                    className="relative group px-3 py-1 rounded-md text-lg font-medium text-gray-700
                               hover:text-[#6B3AC2] transition duration-300 ease-in-out
                               hover:scale-105 hover:shadow-md"
                  >
                    Companies
                    <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-1 bg-[#6B3AC2] rounded transition-all duration-300 ease-in-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/jobs"}
                    className="relative group px-3 py-1 rounded-md text-lg font-medium text-gray-700
                               hover:text-[#FA4F09] transition duration-300 ease-in-out
                               hover:scale-105 hover:shadow-md"
                  >
                    Jobs
                    <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-1 bg-[#FA4F09] rounded transition-all duration-300 ease-in-out"></span>
                  </Link>
                </li>
                <li>
      <Link to={"/Creator"} className="relative group px-3 py-1 rounded-md text-lg font-medium text-gray-700
        hover:text-[#6B3AC2] transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
      >
        Creator
        <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-1 bg-[#6B3AC2] rounded transition-all duration-300 ease-in-out"></span>
      </Link>
    </li>
              </>
            ) : (
              <>
                {[
                  { to: "/Home", label: "Home" },
                  { to: "/Browse", label: "Browse" },
                  { to: "/Jobs", label: "Jobs" },
                  { to: "/Creator", label: "Creator" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="relative group px-3 py-1 rounded-md text-lg font-medium text-gray-700
                                 hover:text-[#6B3AC2] transition duration-300 ease-in-out
                                 hover:scale-105 hover:shadow-md"
                    >
                      {label}
                      <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-1 bg-[#6B3AC2] rounded transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-5">
              <Link to={"/login"}>
                <Button
                  variant="outline"
                  className="border-[#6B3AC2] text-[#6B3AC2] font-semibold 
                             hover:bg-[#6B3AC2] hover:text-white shadow-md
                             transition-all duration-400 ease-in-out transform hover:scale-105"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button
                  className="bg-red-600 text-white border border-red-600 font-semibold
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white shadow-lg
                             transition-all duration-400 ease-in-out transform hover:scale-105"
                >
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar
                  className="cursor-pointer ring-2 ring-[#6B3AC2]
                             hover:ring-[#FA4F09] transition-all duration-400
                             ease-in-out transform hover:scale-110 hover:shadow-xl"
                >
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname || "user avatar"}
                    className="object-cover"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-6 shadow-2xl rounded-xl border border-gray-200">
                <div className="flex items-center gap-5 mb-5">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname || "user avatar"}
                      className="object-cover"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-xl">{user?.fullname}</h3>
                    <p className="text-sm text-gray-500 truncate max-w-[240px]">
                      {user?.profile?.bio || "No bio provided"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-gray-700 text-lg font-medium">
                  {user && user.role === "Student" && (
                    <div className="flex items-center gap-3 cursor-pointer 
                                    hover:text-[#6B3AC2] transition-colors duration-300
                                    transform hover:scale-105 hover:shadow-md rounded-md"
                    >
                      <User2 className="shrink-0" />
                      <Button variant="link" className="p-0 text-lg font-medium">
                        <Link to={"/Profile"}>Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div
                    className="flex items-center gap-3 cursor-pointer text-red-600 
                               hover:text-red-700 transition-colors duration-300 
                               transform hover:scale-105 hover:shadow-md rounded-md select-none"
                    onClick={logoutHandler}
                  >
                    <LogOut className="shrink-0" />
                    <Button variant="link" className="p-0 text-red-600 font-medium">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
