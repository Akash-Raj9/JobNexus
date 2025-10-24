
import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Navigate, useNavigate } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col">


      <Navbar />
      <div className="flex-grow flex items-center justify-center px-6">
        <form
          onSubmit={submitHandler}
          className="relative w-full max-w-md bg-white rounded-3xl p-10
             border border-red-400 border-opacity-30 shadow-md hover:shadow-lg
             backdrop-blur-md hover:scale-[1.02] transition-transform duration-500 space-y-8"
          noValidate
          autoComplete="off"
        >
          <h1 className="text-4xl font-extrabold text-indigo-800 text-center mb-8 animate-gradientText">
            Login
          </h1>

          <div className="space-y-1 relative">
            <Label htmlFor="email" className="text-indigo-900 font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="jobnexus@gmail.com"
              required
              className="focus:ring-indigo-700 focus:border-indigo-700 border-gray-300 rounded-md transition"
              autoComplete="email"
            />
          </div>

          <div className="space-y-1 relative">
            <Label htmlFor="password" className="text-indigo-900 font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="********"
              required
              className="focus:ring-indigo-700 focus:border-indigo-700 border-gray-300 rounded-md transition"
              autoComplete="current-password"
            />
          </div>

          <RadioGroup className="flex gap-8 mt-6 justify-center">
            {["Student", "Recruiter"].map((rol) => (
              <label
                key={rol}
                className={`flex cursor-pointer items-center space-x-2 text-indigo-900 font-medium
               transition-colors duration-300 ${
                 input.role === rol ? "text-indigo-700" : "text-indigo-400"
               }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={rol}
                  checked={input.role === rol}
                  onChange={changeEventHandler}
                  required
                  className="accent-indigo-700 w-5 h-5 cursor-pointer"
                />
                <span>{rol}</span>
              </label>
            ))}
          </RadioGroup>

          {loading ? (
            <div className="flex justify-center py-6">
              <div className="w-8 h-8 border-4 border-indigo-700 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="relative w-full py-3 bg-indigo-700 text-white font-extrabold rounded-full
             shadow-lg hover:shadow-indigo-500/80 active:scale-95 transition-colors transition-shadow transition-transform duration-200
             hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700
             focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              Login
            </button>
          )}

          <p className="text-center text-indigo-900 mt-6 text-base">
            New user?{" "}
            <Link
              to="/register"
              className="text-pink-600 font-semibold hover:underline hover:text-pink-500 transition-colors duration-300"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlow 10s ease-in-out infinite;
        }
        .animate-gradientText {
          background: linear-gradient(to right, #7761f7, #d6336c);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
