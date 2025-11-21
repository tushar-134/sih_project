// src/homepagecomponents/registration/steps/Step3Education.jsx
import React from "react";

export default function Step3Education({ data, update, next, back }) {
  const onChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Education Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="qualification"
          value={data.qualification}
          onChange={onChange}
          placeholder="Highest qualification"
          className="p-3 border rounded-lg"
        />
        <input
          name="university"
          value={data.university}
          onChange={onChange}
          placeholder="College / University"
          className="p-3 border rounded-lg"
        />
        <input
          name="passingYear"
          value={data.passingYear}
          onChange={onChange}
          placeholder="Passing year"
          className="p-3 border rounded-lg"
        />
        <input
          name="grade"
          value={data.grade}
          onChange={onChange}
          placeholder="Percentage / CGPA"
          className="p-3 border rounded-lg"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="bg-gray-300 px-6 py-2 rounded-lg">← Back</button>
        <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Next →</button>
      </div>
    </div>
  );
}
