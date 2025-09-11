
import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer"; // Added Footer import
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companyslice";
import axios from "axios";
import { motion } from "framer-motion";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-tr from-blue-50 via-white to-indigo-100">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Scrollable main content */}
      <main className="flex-grow overflow-y-auto w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Name</h1>
            <p className="text-gray-600">Company Description</p>
          </div>

          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            placeholder="Company Name"
            className="my-2"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            aria-label="Company Name"
          />

          <div className="flex items-center gap-4 mt-10 justify-end">
            <Button
              variant="outline"
              onClick={() => navigate("/admin/companies")}
              className="px-6 py-3"
            >
              Cancel
            </Button>
            <Button onClick={registerNewCompany} className="px-6 py-3">
              Continue
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default CompanyCreate;
