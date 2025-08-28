import Image from "next/image";

interface SkillsProps {
  data: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
}

// Map skill names from your portfolio.json to their icon paths in `public/icons`
const skillIconMap: { [key: string]: string } = {
  // --- Skills ---
  "HTML": "/icons/html.svg",
  "CSS": "/icons/css.svg",
  "JavaScript": "/icons/javascript.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "React JS": "/icons/react.svg",
  "Redux": "/icons/redux.svg",
  "Material UI": "/icons/materialui.svg",
  "Node JS": "/icons/node.svg",
  "Express JS": "/icons/express.svg",
  "MongoDB": "/icons/mongo.svg",
  "GitHub": "/icons/github.svg",
  "TypeScript": "/icons/typescript.svg",
  "Bootstrap": "/icons/bootstrap.svg",
  "REST APIs": "/icons/rest-api.svg",
  "JWT Authentication": "/icons/json.svg",
  "AWS": "/icons/aws.svg",
  "VS Code": "/icons/vscode.svg",
  "Cloudinary": "/icons/cloudinary.svg",
  "Vercel": "/icons/vercel.svg",
};

const SkillDisplay = ({ name }: { name: string }) => {
  const iconPath = skillIconMap[name] || "/icons/default.svg"; // A default icon for safety
  const displayName = name.split(" (")[0]; // Cleans up names like "JavaScript (ES6+)"

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2">
      <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 hover:scale-110">
        <Image
          src={iconPath}
          alt={`${displayName} Logo`}
          layout="fill"
          objectFit="contain"
          unoptimized={true}
        />
      </div>
      <p className="text-sm text-gray-300 text-center">{displayName}</p>
    </div>
  );
};

export default function Skills({ data }: SkillsProps) {
  // Combine your skills from portfolio.json into one array for the main section
  const mainSkills = [
    ...data.frontend,
    ...data.backend,
    ...data.database,
    "GitHub"
  ];

  // Filter out the software/platforms for the second section
  const softwareAndTools = data.tools.filter(tool => tool !== "GitHub");

  return (
    <section id="skills" className="py-24 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- SKILLS Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-4 gap-y-10">
          {mainSkills.map((skill) => (
            <SkillDisplay key={skill} name={skill} />
          ))}
        </div>

        {/* --- TOOLS AND SOFTWARE Section --- */}
        <div className="text-center mt-28 mb-16">
          <h3 className="text-2xl font-semibold tracking-wider text-gray-400 uppercase">
            Tools and Software
          </h3>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-x-4 gap-y-10">
          {softwareAndTools.map((tool) => (
            <SkillDisplay key={tool} name={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}