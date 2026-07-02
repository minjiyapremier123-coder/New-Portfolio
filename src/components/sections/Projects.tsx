import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Kavach",
    subtitle: "Offline Emergency SOS System",
    description:
      "An emergency response platform capable of routing SOS alerts even without active internet connectivity. Built with Firebase and Java to ensure reliability during critical situations.",
    image: "/Kavach.png",
    imageAlt: "Kavach Project Screenshot",
    tech: ["Java", "Firebase", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/minjiyapremier123-coder/Kavach",
    demo: "https://kavach-india-six.vercel.app/",
  },
  {
    title: "Vibe Check",
    subtitle: "GenZ Expense Calculator",
    description:
      "A modern expense tracker designed for Gen-Z users with an engaging UI, smart expense insights and responsive design.",
    image: "/ExpenseCalc.png",
    imageAlt: "Vibe Check Project Screenshot",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/minjiyapremier123-coder/Vibecheck-_Genz_Expense_Calculator",
    demo:
      "https://vibecheck-genz-expense-calculator.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Work
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto leading-8">
            A selection of projects that demonstrate my
            problem-solving ability, software engineering
            practices and modern web development skills.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 space-y-12">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .2,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="grid lg:grid-cols-2 gap-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-10">

                <h3 className="text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-cyan-400">
                  {project.subtitle}
                </p>

                <p className="mt-6 leading-8 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-10 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-cyan-400 px-6 py-3 font-semibold transition hover:bg-cyan-500 hover:text-slate-950"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}