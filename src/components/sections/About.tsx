import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Trophy,
  Briefcase,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Know Me Better
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Hi, I'm <span className="text-violet-400 font-semibold">Jiya Min</span>,
            an aspiring Software Development Engineer pursuing B.Tech in
            Electronics and Communication Engineering at
            <span className="text-cyan-400"> IIIT Kota</span>.

            I enjoy building scalable software, crafting modern web
            applications and solving real-world problems through clean,
            efficient code.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <GraduationCap className="text-violet-400" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Education
            </h3>

            <p className="mt-3 text-slate-400">
              IIIT Kota

              <br />

              B.Tech ECE

              <br />

              CGPA 8.70
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <Code2 className="text-cyan-400" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Coding
            </h3>

            <p className="mt-3 text-slate-400">
              120+ LeetCode Problems

              <br />

              Strong DSA Foundation

            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <Briefcase className="text-violet-400" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Experience
            </h3>

            <p className="mt-3 text-slate-400">
              Software Development Intern

              <br />

              Zidio Development Pvt. Ltd.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <Trophy className="text-cyan-400" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              Achievements
            </h3>

            <p className="mt-3 text-slate-400">
              Microsoft Learn

              <br />

              GSSoC

              <br />

              Nexus Summer of Code
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}