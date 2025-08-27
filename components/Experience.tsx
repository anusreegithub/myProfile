import { Calendar, MapPin, ChevronRight } from "lucide-react"

interface ExperienceProps {
  data: Array<{
    title: string
    company: string
    location: string
    duration: string
    achievements: string[]
    techStack: string[]
  }>
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Experience</h2>
        </div>

        <div className="space-y-8">
          {data.map((job, index) => (
            <div key={index} className="bg-black border-1 border-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#FFD700] mb-2">{job.title}</h3>
                  <h4 className="text-xl text-[#FFD700] mb-2">{job.company}</h4>
                </div>
                <div className="flex flex-col md:items-end text-white">
                  <div className="flex items-center mb-1">
                    <Calendar size={16} className="mr-2" />
                    {job.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {job.location}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-white  mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <ChevronRight size={16} className="text-white mr-2 mt-1 flex-shrink-0" />
                      <span className="text-white">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
