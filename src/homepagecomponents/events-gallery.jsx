import { Link } from "react-router-dom";


export default function EventsGallery() {
  const events = [
    {
      title: "PMIS North-East Roundtable",
      desc: "Leaders, industry, and youth converge in Shillong to...",
      date: "10th July, 2025",
      location: "Shillong, Meghalya",
    },
    {
      title: "Intern Interaction Event",
      desc: "Meaningful moments in Dehradun– PMIS interns en...",
      date: "17th June, 2025",
      location: "Dehradun",
    },
    {
      title: "PMIS Intern Connect",
      desc: "Celebrating the spirit of learning, innovation, and yo...",
      date: "20th June, 2025",
      location: "Hyderabad",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">—</span> Events Gallery <span className="text-orange-500">—</span>
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.desc}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
                <button className="w-full text-center text-orange-500 font-bold hover:text-orange-600">
                  View Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
