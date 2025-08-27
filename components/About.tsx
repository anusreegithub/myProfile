interface AboutProps {
  data: {
    name: string
    summary: string
    aboutme: string
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/developer-working-on-computer-with-modern-setup.png" alt="About me" className="rounded-lg shadow-lg w-full" />
          </div>



          <div>
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-6">Passionate MERN Stack Developer</h3>
            <p className="text-white mb-6 leading-relaxed">{data?.aboutme}</p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#FFD700] mb-2">Experience</h4>
                <p className="text-white">1.5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#FFD700] mb-2">Projects</h4>
                <p className="text-white">30+ Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#FFD700] mb-2">Specialization</h4>
                <p className="text-white">Full Stack Development</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#FFD700] mb-2">Focus</h4>
                <p className="text-white">User Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
