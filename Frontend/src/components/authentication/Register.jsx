
import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    pancard: "",
    adharcard: "",
    file: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const ChangeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] || null });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("pancard", input.pancard);
    formData.append("adharcard", input.adharcard);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred.";
      toast.error(errorMessage);
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
            border border-gray-300 shadow-md backdrop-blur-md hover:shadow-lg hover:scale-[1.02]
            transition-transform duration-500 space-y-8"
          noValidate
          autoComplete="off"
        >
          <h1 className="text-4xl font-extrabold text-indigo-800 text-center mb-8 animate-gradientText">
            Register
          </h1>

          {[{
            label: "Fullname",
            name: "fullname",
            type: "text",
            placeholder: "JobNexus",
            value: input.fullname,
          },{
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "jobnexus@gmail.com",
            value: input.email,
          },{
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "********",
            value: input.password,
          },{
            label: "PAN Card Number",
            name: "pancard",
            type: "text",
            placeholder: "ABCDEF1234G",
            value: input.pancard,
          },{
            label: "Adhar Card Number",
            name: "adharcard",
            type: "text",
            placeholder: "123456789012",
            value: input.adharcard,
          },{
            label: "Phone Number",
            name: "phoneNumber",
            type: "tel",
            placeholder: "+1234567890",
            value: input.phoneNumber,
          }].map(({ label, name, type, placeholder, value }) => (
            <div key={name} className="space-y-1">
              <Label htmlFor={name} className="text-indigo-900 font-semibold">{label}</Label>
              <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={changeEventHandler}
                required
                className="focus:ring-indigo-700 focus:border-indigo-700 border border-gray-300 rounded-md transition"
                autoComplete={type === "password" ? "new-password" : "off"}
              />
            </div>
          ))}

          <div className="flex items-center gap-2">
            <Label className="text-indigo-900 font-semibold">Profile Photo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={ChangeFilehandler}
              className="cursor-pointer"
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
              Register
            </button>
          )}

          <p className="text-center text-indigo-900 mt-6 text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-600 font-semibold hover:underline hover:text-pink-500 transition-colors duration-300"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      <style>{`
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

export default Register;
