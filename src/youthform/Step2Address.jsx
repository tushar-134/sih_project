// src/homepagecomponents/registration/steps/Step2Address.jsx
import React from "react";

export default function Step2Address({ data, update, next, back }) {
  const onChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Address Details</h3>

      <h4 className="font-semibold text-gray-700 mb-2">Permanent Address</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          name="permAddress"
          value={data.permAddress}
          onChange={onChange}
          placeholder="Full permanent address"
          className="p-3 border rounded-lg md:col-span-2"
        />
        <input
          name="permDistrict"
          value={data.permDistrict}
          onChange={onChange}
          placeholder="District"
          className="p-3 border rounded-lg"
        />
        <input
          name="permState"
          value={data.permState}
          onChange={onChange}
          placeholder="State"
          className="p-3 border rounded-lg"
        />
        <input
          name="permPincode"
          value={data.permPincode}
          onChange={onChange}
          placeholder="Pincode"
          className="p-3 border rounded-lg"
        />
      </div>

      <h4 className="font-semibold text-gray-700 mt-6 mb-2">Correspondence Address</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          name="corrAddress"
          value={data.corrAddress}
          onChange={onChange}
          placeholder="Correspondence address"
          className="p-3 border rounded-lg md:col-span-2"
        />
        <input
          name="corrDistrict"
          value={data.corrDistrict}
          onChange={onChange}
          placeholder="District"
          className="p-3 border rounded-lg"
        />
        <input
          name="corrState"
          value={data.corrState}
          onChange={onChange}
          placeholder="State"
          className="p-3 border rounded-lg"
        />
        <input
          name="corrPincode"
          value={data.corrPincode}
          onChange={onChange}
          placeholder="Pincode"
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
