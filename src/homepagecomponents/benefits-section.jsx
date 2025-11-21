export default function BenefitsSection() {
  const benefits = [
    { icon: "💼", title: "12 months real-life experience", desc: "in India's top companies" },
    { icon: "💵", title: "Monthly assistance of ₹4500", desc: "by Government of India and ₹500 by Industry" },
    { icon: "💰", title: "One-time Grant of ₹6000", desc: "for incidentals" },
    { icon: "🎯", title: "Select from Various Sectors", desc: "across different industries" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Core Benefits for <span className="text-orange-500">PM Internship Scheme</span>
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}