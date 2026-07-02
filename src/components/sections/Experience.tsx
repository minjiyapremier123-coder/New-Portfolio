import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Professional Journey
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Gaining practical software engineering experience through
            internships, real-world projects, and collaborative development.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-8 top-0 h-full w-1 rounded-full bg-gradient-to-b from-violet-600 via-cyan-500 to-violet-600" />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative ml-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            {/* Timeline Dot */}

            <div className="absolute -left-[58px] top-10 h-10 w-10 rounded-full bg-cyan-500 border-4 border-slate-950" />

            <div className="flex flex-wrap items-center gap-4">

              <Briefcase
                className="text-violet-400"
                size={40}
              />

              <div>

                <h3 className="text-3xl font-bold">
                  Software Development Intern
                </h3>

                <p className="text-cyan-400 mt-2">
                  Zidio Development Pvt. Ltd.
                </p>

              </div>

            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">

                <Calendar className="text-cyan-400" />

                <h4 className="mt-4 font-semibold">
                  Duration
                </h4>

                <p className="mt-2 text-slate-400">
                  Currently Working
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">

                <Building2 className="text-violet-400" />

                <h4 className="mt-4 font-semibold">
                  Domain
                </h4>

                <p className="mt-2 text-slate-400">
                  Full Stack Web Development
                </p>

              </div>

            </div>

            <ul className="mt-10 space-y-4 text-slate-300 leading-8 list-disc pl-6">

              <li>
                Developing modern full-stack web applications using React,
                TypeScript and contemporary frontend technologies.
              </li>

              <li>
                Building responsive user interfaces with reusable,
                component-based architecture.
              </li>

              <li>
                Working with APIs, authentication flows and real-world
                software engineering practices.
              </li>

              <li>
                Collaborating using Git, GitHub and modern development
                workflows.
              </li>

            </ul>

          </motion.div>

        </div>

      </div>
    </section>
  );
}