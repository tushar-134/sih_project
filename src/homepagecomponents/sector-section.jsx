export default function SectorsSection() {
  const sectors = [
    { name: "Textile Manufacturing", img: "🏭" },
    { name: "Travel & Hospitality", img: "🏨" },
    { name: "Agriculture and allied", img: "🚜" },
    { name: "Automotive", img: "🚗" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">—</span> Explore Opportunities in various Sectors{" "}
          <span className="text-orange-500">—</span>
        </h2>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">{sector.img}</span>
              </div>
              <div className="p-4 text-center font-semibold text-gray-800">{sector.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600">
            Show More
          </button>
        </div>
      </div>
    </section>
  )
}
