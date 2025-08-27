"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingElements from "@/components/FloatingElements"
import FluidCursor from "@/components/FluidCursor"

interface PortfolioData {
  personal: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
    summary: string
    aboutme: string
  }
  experience: Array<{
    title: string
    company: string
    location: string
    duration: string
    achievements: string[]
    techStack: string[]
  }>
  projects: Array<{
    name: string
    description: string
    techStack: string[]
    liveDemo: string
    github: string
    image: string
  }>
  education: {
    degree: string
    university: string
    college: string
    duration: string
    thesis: string
  }
  skills: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
  languages: string[]
  interests: string[]
  volunteer: string
}

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/portfolio.json")
        const data = await response.json()
        setPortfolioData(data)
      } catch (error) {
        console.error("Error fetching portfolio data:", error)
      }
    }

    fetchData()
  }, [])

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FFD700]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen  relative overflow-hidden">

      <FluidCursor />

      <FloatingElements />

      <Header data={portfolioData.personal} />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Skills data={portfolioData.skills} />
      <Contact data={portfolioData.personal} />
      <Footer />
    </div>
  )
}
