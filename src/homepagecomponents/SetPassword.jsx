import React, { useState } from "react";
import axios from "axios";
import { Lock, CheckCircle } from "lucide-react";

export default function SetPassword({ mobile, onSuccess }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/create-password", {
        mobile,
        password,
      });

      onSuccess(res.data.token);
      alert("Password set successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Error setting password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-100 via-white to-blue-100 p-4">
      <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/40 relative overflow-hidden">

        {/* Glow Decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex justify-center items-center shadow-xl shadow-orange-400/40">
            <Lock className="text-white" size={32} />
          </div>
          <h2 className="text-3xl mt-4 font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Set Your Password
          </h2>
          <p className="text-gray-500 text-sm mt-1">Secure your PM Internship account</p>
        </div>

        {/* Password Inputs */}
        <div className="space-y-5 relative z-10">
          <div>
            <label className="font-semibold text-gray-700 mb-1 block">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                value={password}
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-3 border-2 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition placeholder-gray-400 bg-white/70 backdrop-blur-sm"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-700 mb-1 block">Confirm Password</label>
            <div className="relative">
              <CheckCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                value={confirm}
                placeholder="Confirm password"
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full pl-10 p-3 border-2 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition placeholder-gray-400 bg-white/70 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={submit}
          disabled={loading}
          className={`w-full mt-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all text-lg
            ${loading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105"} 
          `}
        >
          {loading ? "Saving..." : "Set Password"}
        </button>
      </div>
    </div>
  );
}
