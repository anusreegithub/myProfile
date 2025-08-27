import { ArrowDown, Download } from "lucide-react"

interface HeroProps {
  data: {
    name: string
    title: string
    location: string
    summary: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center">
          <div className="mb-1 relative">
            <img
              src="/profile.png"
              alt={data.name}
              className="w-45 h-45 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg relative z-10 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4 relative">
            Hi, I'm{" "}
            <span className="text-[#FFD700] relative inline-block">
              {data.name}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-white mb-6 animate-float">{data.title}</h2>

          <p className="text-lg text-white mb-2">📍 {data.location}</p>

          <p className="text-lg text-white max-w-3xl mx-auto mb-8 leading-relaxed">{data.summary}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#FFD700] text-black px-8 py-3 rounded-lg hover:bg-yellow-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Download size={20} />
              Download Resume
            </button>
            <a
              href="#contact"
              className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-lg hover:bg-[#FFD700] hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10">Get In Touch</span>
            </a>
          </div>

          <div className="mt-16">
            <a href="#about" className="inline-block animate-bounce hover:animate-pulse">
              <ArrowDown size={24} className="text-gray-400 hover:text-blue-500 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
