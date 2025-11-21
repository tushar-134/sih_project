// src/homepagecomponents/registration/steps/Step4Documents.jsx
import React from "react";

function toBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res({ data: reader.result, name: file.name, size: file.size, type: file.type });
    reader.onerror = (err) => rej(err);
  });
}

export default function Step4Documents({ data, updateDocument, next, back }) {
  const handleFile = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;
    // limit 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("File too large (max 5MB)");
      return;
    }
    const base = await toBase64(file);
    updateDocument(key, base);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>

      <div className="space-y-4">
        <div>
          <label className="font-semibold">Aadhar Card (PDF / JPG)</label>
          <input type="file" onChange={(e) => handleFile(e, "aadhar")} className="block w-full mt-2" />
          {data.documents?.aadhar && <p className="text-sm text-green-700 mt-1">Uploaded: {data.documents.aadhar.name}</p>}
        </div>

        <div>
          <label className="font-semibold">10th Marksheet</label>
          <input type="file" onChange={(e) => handleFile(e, "tenth")} className="block w-full mt-2" />
          {data.documents?.tenth && <p className="text-sm text-green-700 mt-1">Uploaded: {data.documents.tenth.name}</p>}
        </div>

        <div>
          <label className="font-semibold">12th Marksheet</label>
          <input type="file" onChange={(e) => handleFile(e, "twelfth")} className="block w-full mt-2" />
          {data.documents?.twelfth && <p className="text-sm text-green-700 mt-1">Uploaded: {data.documents.twelfth.name}</p>}
        </div>

        <div>
          <label className="font-semibold">Resume (PDF)</label>
          <input type="file" onChange={(e) => handleFile(e, "resume")} className="block w-full mt-2" />
          {data.documents?.resume && <p className="text-sm text-green-700 mt-1">Uploaded: {data.documents.resume.name}</p>}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="bg-gray-300 px-6 py-2 rounded-lg">← Back</button>
        <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Next →</button>
      </div>
    </div>
  );
}
