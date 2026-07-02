import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-violet-400" size={28} />,
    skills: [
      "C++",
      "Java",
      "JavaScript",
      "Python",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    icon: <Globe className="text-cyan-400" size={28} />,
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: <Database className="text-violet-400" size={28} />,
    skills: [
      "Node.js",
      "Express.js",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-cyan-400" size={28} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Technical Expertise
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            Technologies and tools I use to design, build and deploy
            modern software solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="flex items-center gap-4">

                {category.icon}

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/30 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-violet-500 hover:bg-violet-600/20"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}