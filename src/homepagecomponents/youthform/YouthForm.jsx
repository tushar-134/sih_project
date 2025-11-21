// src/homepagecomponents/registration/YouthForm.jsx
import React, { useState, useEffect } from "react";
import ProgressBar from "./progressBar";
import Step1Personal from "./Step1Personal";
import Step2Address from "./Step2Address";
import Step3Education from "./Step3Education";
import Step4Documents from "./Step4Documents";
import Step5Review from "./Step5Review";

const STORAGE_KEY = "youth_form_v1";

export default function YouthForm() {
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    // personal
    fullname: "",
    fathername: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    // permanent
    permAddress: "",
    permDistrict: "",
    permState: "",
    permPincode: "",
    // correspondence
    corrAddress: "",
    corrDistrict: "",
    corrState: "",
    corrPincode: "",
    // education
    qualification: "",
    university: "",
    passingYear: "",
    grade: "",
    // skills & docs
    skills: "",
    documents: {
      aadhar: null,
      tenth: null,
      twelfth: null,
      resume: null
    }
  });

  // load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.formData) setFormData(parsed.formData);
        if (parsed.step) setStep(parsed.step);
      }
    } catch (e) {
      console.warn("Failed to read saved form:", e);
    }
  }, []);

  // autosave on change (debounced-ish)
  useEffect(() => {
    setSaving(true);
    const t = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, formData }));
      setSaving(false);
    }, 500);
    return () => clearTimeout(t);
  }, [formData, step]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const goTo = (n) => setStep(n);

  const update = (patch) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  };

  const updateDocument = (key, fileObj) => {
    setFormData((prev) => ({
      ...prev,
      documents: { ...prev.documents, [key]: fileObj }
    }));
  };

  // POST submit
  const handleSubmit = async () => {
    try {
      // optionally, you might want to strip heavy fields or handle separately
      const payload = { ...formData };

      // documents are base64 strings in documents.{key}.data (if uploaded)
      // This should be adapted on server to accept base64 or accept files via multipart
      const res = await fetch("http://localhost:5000/api/youth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration saved ✔");
        localStorage.removeItem(STORAGE_KEY);
        // optionally reset form
        setFormData({
          fullname: "",
          fathername: "",
          dob: "",
          gender: "",
          email: "",
          mobile: "",
          permAddress: "",
          permDistrict: "",
          permState: "",
          permPincode: "",
          corrAddress: "",
          corrDistrict: "",
          corrState: "",
          corrPincode: "",
          qualification: "",
          university: "",
          passingYear: "",
          grade: "",
          skills: "",
          documents: { aadhar: null, tenth: null, twelfth: null, resume: null }
        });
        setStep(1);
      } else {
        alert("Submit failed: " + (data.error || JSON.stringify(data)));
      }
    } catch (err) {
      console.error(err);
      alert("Network error: " + err.message);
    }
  };

  // nice background: using one of your uploaded screenshots path (tool will transform to URL)
  const backgroundStyle = {
    backgroundImage: 'url("/mnt/data/Screenshot 2025-11-20 225223.png")',
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={backgroundStyle}
    >
      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">
            Youth Registration
          </h1>
          <p className="text-center text-sm text-gray-600">
            Step {step} of 5 — <span className="italic">{saving ? "saving…" : "saved"}</span>
          </p>
        </div>

        <ProgressBar step={step} />

        <div className="mt-6 space-y-6">
          {step === 1 && (
            <Step1Personal data={formData} update={update} next={next} />
          )}
          {step === 2 && (
            <Step2Address data={formData} update={update} next={next} back={back} />
          )}
          {step === 3 && (
            <Step3Education data={formData} update={update} next={next} back={back} />
          )}
          {step === 4 && (
            <Step4Documents
              data={formData}
              updateDocument={updateDocument}
              next={next}
              back={back}
            />
          )}
          {step === 5 && (
            <Step5Review
              data={formData}
              back={back}
              onSubmit={handleSubmit}
              goTo={goTo}
            />
          )}
        </div>
      </div>
    </div>
  );
}
