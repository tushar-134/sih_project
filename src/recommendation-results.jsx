"use client"

import { useState } from "react"
import InternshipRecommendationCard from "@/components/internship-recommendation-card"
import { Award, TrendingUp } from "lucide-react"

// Mock recommendation engine - generates personalized matches
function generateRecommendations(profile) {
  const allInternships = [
    {
      id: 1,
      title: "Product Management Intern",
      company: "TechFlow Solutions",
      logo: "🚀",
      location: "Bangalore",
      workMode: "On-site",
      duration: "3 months",
      stipend: "₹15,000/month",
      description: "Work on product features, conduct user research, and collaborate with cross-functional teams",
      sectors: ["tech"],
      skills: ["Communication", "Leadership", "Problem Solving"],
      matchScore: 95,
    },
    {
      id: 2,
      title: "Data Analytics Intern",
      company: "DataMinds Inc",
      logo: "📊",
      location: "Remote",
      workMode: "Remote",
      duration: "4 months",
      stipend: "₹12,000/month",
      description: "Analyze business data, create dashboards, and provide insights to drive decision making",
      sectors: ["tech", "finance"],
      skills: ["Data Analysis", "Excel", "Problem Solving"],
      matchScore: 88,
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "WebVerse Studios",
      logo: "💻",
      location: "Hyderabad",
      workMode: "Hybrid",
      duration: "3 months",
      stipend: "₹14,000/month",
      description: "Build responsive UI components using React, collaborate with designers and backend team",
      sectors: ["tech"],
      skills: ["JavaScript", "Problem Solving", "Communication"],
      matchScore: 85,
    },
    {
      id: 4,
      title: "Content Writer Intern",
      company: "CreativeEdge Media",
      logo: "✍️",
      location: "Delhi",
      workMode: "Remote",
      duration: "2 months",
      stipend: "₹8,000/month",
      description: "Create engaging blog posts, social media content, and marketing materials",
      sectors: ["media", "marketing"],
      skills: ["Content Writing", "Communication", "Social Media"],
      matchScore: 82,
    },
    {
      id: 5,
      title: "Business Analyst Intern",
      company: "ConsultPro Group",
      logo: "📈",
      location: "Mumbai",
      workMode: "Hybrid",
      duration: "3 months",
      stipend: "₹13,000/month",
      description: "Analyze market trends, prepare reports, and support strategic initiatives",
      sectors: ["consulting", "finance"],
      skills: ["Data Analysis", "Project Management", "Communication"],
      matchScore: 80,
    },
  ]

  // Score and sort based on profile
  const scored = allInternships.map((internship) => {
    let score = internship.matchScore

    // Boost score if sector matches
    if (profile.sectors.some((s) => internship.sectors.includes(s))) score += 10

    // Boost score if location matches
    if (profile.locations.some((l) => l === "remote" && internship.workMode === "Remote")) score += 5

    // Boost score if skills match
    const skillMatches = profile.skills.filter((s) => internship.skills.includes(s)).length
    score += skillMatches * 5

    return { ...internship, matchScore: Math.min(score, 99), finalScore: score }
  })

  return scored.sort((a, b) => b.finalScore - a.finalScore).slice(0, 5)
}

export default function RecommendationResults({ profile }) {
  const recommendations = generateRecommendations(profile)
  const [appliedInternships, setAppliedInternships] = useState([])

  const handleApply = (internshipId) => {
    if (!appliedInternships.includes(internshipId)) {
      setAppliedInternships([...appliedInternships, internshipId])
    }
  }

  const topMatch = recommendations[0]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Your Perfect Matches, <span className="text-gradient">Found!</span>
        </h1>
        <p className="text-lg text-slate-600">
          Hi <span className="font-semibold">{profile.name}</span>! We found{" "}
          <span className="font-bold">{recommendations.length}</span> internships that match your profile
        </p>
      </div>

      {/* Top Match Card */}
      {topMatch && (
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6" />
                <span className="text-sm font-semibold">Top Match for You</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{topMatch.title}</h2>
              <p className="text-lg opacity-90">{topMatch.company}</p>
            </div>
            <div className="text-6xl font-bold opacity-20">{topMatch.logo}</div>
          </div>

          <p className="mb-6 text-white/90">{topMatch.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <div className="text-sm opacity-75">Location</div>
              <div className="font-semibold">{topMatch.location}</div>
            </div>
            <div>
              <div className="text-sm opacity-75">Duration</div>
              <div className="font-semibold">{topMatch.duration}</div>
            </div>
            <div>
              <div className="text-sm opacity-75">Stipend</div>
              <div className="font-semibold">{topMatch.stipend}</div>
            </div>
            <div>
              <div className="text-sm opacity-75">Mode</div>
              <div className="font-semibold">{topMatch.workMode}</div>
            </div>
          </div>

          <button
            onClick={() => handleApply(topMatch.id)}
            disabled={appliedInternships.includes(topMatch.id)}
            className="w-full bg-white text-purple-600 font-bold py-3 rounded-xl hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {appliedInternships.includes(topMatch.id) ? "✓ Applied" : "Apply Now"}
          </button>
        </div>
      )}

      {/* Other Recommendations */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          Other Great Matches
        </h3>
        <div className="space-y-4">
          {recommendations.slice(1).map((internship) => (
            <InternshipRecommendationCard
              key={internship.id}
              internship={internship}
              isApplied={appliedInternships.includes(internship.id)}
              onApply={() => handleApply(internship.id)}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Apply?</h3>
        <p className="text-slate-600 mb-6">
          You have {appliedInternships.length} application(s) started. Complete your profile to submit them!
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition">
          Continue Applications →
        </button>
      </div>
    </div>
  )
}
