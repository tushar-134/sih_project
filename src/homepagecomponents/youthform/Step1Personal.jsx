// src/homepagecomponents/registration/steps/Step1Personal.jsx
import React from "react";

export default function Step1Personal({ data, update, next }) {
  const onChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Personal Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="fullname"
          value={data.fullname}
          onChange={onChange}
          placeholder="Full name"
          className="p-3 border rounded-lg"
        />
        <input
          name="fathername"
          value={data.fathername}
          onChange={onChange}
          placeholder="Father's name"
          className="p-3 border rounded-lg"
        />

        <input
          name="dob"
          type="date"
          value={data.dob}
          onChange={onChange}
          className="p-3 border rounded-lg"
        />

        <select
          name="gender"
          value={data.gender}
          onChange={onChange}
          className="p-3 border rounded-lg"
        >
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
          placeholder="Email"
          className="p-3 border rounded-lg md:col-span-2"
        />

        <input
          name="mobile"
          value={data.mobile}
          onChange={onChange}
          placeholder="Mobile"
          className="p-3 border rounded-lg md:col-span-2"
          maxLength={10}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Next →
        </button>
      </div>
    </div>
  );
}
