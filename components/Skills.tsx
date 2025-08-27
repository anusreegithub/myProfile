interface SkillsProps {
  data: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
}

export default function Skills({ data }: SkillsProps) {
  const techIcons = {
    // Frontend technologies
    HTML: "🌐",
    CSS: "🎨",
    "JavaScript (ES6+)": "⚡",
    TypeScript: "📘",
    "React.js": "⚛️",
    "Next.js": "▲",
    "Vue.js": "💚",
    Angular: "🅰️",
    "Tailwind CSS": "🌊",
    Bootstrap: "🅱️",
    Sass: "💗",
    "Material UI": "🎯",
    Redux: "🔄",
    Formik: "📝",

    // Backend technologies
    "Node.js": "🟢",
    "Express.js": "🚀",
    "REST APIs": "🔗",
    "JWT Authentication": "🔐",
    "State Management": "📊",
    Python: "🐍",
    Django: "🎸",
    Flask: "🌶️",
    PHP: "🐘",
    Java: "☕",
    "C#": "#️⃣",
    Ruby: "💎",
    Go: "🐹",

    // Databases
    MongoDB: "🍃",
    MySQL: "🐬",
    PostgreSQL: "🐘",
    Redis: "🔴",
    Firebase: "🔥",
    SQLite: "📊",
    SQL: "🗄️",


    GitHub: "🐙",
    "VS Code": "💙",
    Docker: "🐳",
    AWS: "☁️",
    Vercel: "▲",
    Netlify: "🌐",
    Render: "🚀",
    Postman: "📮",
    Chrome: "🌍",
    Ubuntu: "🟠",
    ChatGPT: "🤖",
    EC2: "☁️",
    S3: "📦",
    Cloudinary: "☁️",
  }


  const skillCategories = [
    { name: "Frontend", skills: data.frontend, color: "bg-blue-100 text-blue-800" },
    { name: "Backend", skills: data.backend, color: "bg-green-100 text-green-800" },
    { name: "Database", skills: data.database, color: "bg-purple-100 text-purple-800" },
    { name: "Tools & Cloud", skills: data.tools, color: "bg-orange-100 text-orange-800" },
  ]

  return (
    <section id="skills" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg">Technologies I work with to build amazing applications</p>
        </div>


        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-3 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
                >
                  <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {techIcons[skill as keyof typeof techIcons] || "⚙️"}
                  </div>
                  <span className="text-white text-sm font-medium text-center leading-tight">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Professional Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">30+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">1.6+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">User Engagement Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
