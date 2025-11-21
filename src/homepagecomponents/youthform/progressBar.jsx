// src/homepagecomponents/registration/ProgressBar.jsx
import React from "react";

export default function ProgressBar({ step = 1 }) {
  const percent = Math.round(((step - 1) / 4) * 100);
  const display = (step - 1) * 25;
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all"
          style={{ width: `${display}%` }}
        />
      </div>

      <div className="flex justify-between mt-3 text-sm text-gray-600">
        <span className={step>=1?"font-semibold text-gray-800":""}>Personal</span>
        <span className={step>=2?"font-semibold text-gray-800":""}>Address</span>
        <span className={step>=3?"font-semibold text-gray-800":""}>Education</span>
        <span className={step>=4?"font-semibold text-gray-800":""}>Documents</span>
        <span className={step>=5?"font-semibold text-gray-800":""}>Review</span>
      </div>
    </div>
  );
}
