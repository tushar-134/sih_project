// src/homepagecomponents/registration/steps/Step5Review.jsx
import React from "react";

export default function Step5Review({ data, back, onSubmit, goTo }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Review & Submit</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Personal</h4>
          <p><b>Name:</b> {data.fullname}</p>
          <p><b>Father:</b> {data.fathername}</p>
          <p><b>DOB:</b> {data.dob}</p>
          <p><b>Gender:</b> {data.gender}</p>
          <p><b>Email:</b> {data.email}</p>
          <p><b>Mobile:</b> {data.mobile}</p>
        </div>

        <div>
          <h4 className="font-semibold">Address</h4>
          <p><b>Permanent:</b> {data.permAddress} — {data.permDistrict}, {data.permState} ({data.permPincode})</p>
          <p><b>Correspondence:</b> {data.corrAddress} — {data.corrDistrict}, {data.corrState} ({data.corrPincode})</p>
        </div>

        <div>
          <h4 className="font-semibold">Education</h4>
          <p>{data.qualification} — {data.university} ({data.passingYear})</p>
          <p><b>Grade:</b> {data.grade}</p>
        </div>

        <div>
          <h4 className="font-semibold">Documents</h4>
          <ul className="list-disc ml-5">
            <li>Aadhar: {data.documents?.aadhar?.name || "—"}</li>
            <li>10th: {data.documents?.tenth?.name || "—"}</li>
            <li>12th: {data.documents?.twelfth?.name || "—"}</li>
            <li>Resume: {data.documents?.resume?.name || "—"}</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="bg-gray-300 px-6 py-2 rounded-lg">← Back</button>
        <div className="flex gap-3">
          <button onClick={() => goTo(1)} className="bg-yellow-400 px-4 py-2 rounded-lg">Edit</button>
          <button onClick={onSubmit} className="bg-green-600 text-white px-6 py-2 rounded-lg">Submit ✓</button>
        </div>
      </div>
    </div>
  );
}
