import React from 'react';

export default function EligibilitySection() {
  const criteria = [
    { icon: "👤", title: "Age", desc: "21-24 Years" },
    { icon: "💼", title: "Job Status", desc: "Not Employed Full Time" },
    { icon: "🎓", title: "Education", desc: "Not Enrolled Full Time" },
    { icon: "👨‍👩‍👧", title: "Family Income", desc: "No one earning >₹8L/yr" },
  ]

  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Are you <span className="text-orange-500">Eligible?</span>
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {criteria.map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-orange-500 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}