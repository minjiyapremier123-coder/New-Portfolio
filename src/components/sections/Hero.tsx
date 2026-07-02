"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Download,
  ArrowRight,
  Code2,
  GraduationCap,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import { SplineScene } from "@/components/ui/spline";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-48 left-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[150px]" />

        <div className="absolute bottom-0 right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex-1"
        >

          <p className="mb-4 text-cyan-400 tracking-[6px] uppercase">

            Hello, I'm 👋

          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">

            <span className="block">Jiya</span>

            <span className="block text-violet-500">

              Min

            </span>

          </h1>

          <div className="mt-8 text-3xl font-semibold text-slate-200">

            <TypeAnimation

              sequence={[

                "Software Development Engineer",

                2000,

                "Full Stack Developer",

                2000,

                "Open Source Contributor",

                2000,

                "Problem Solver",

                2000,

              ]}

              repeat={Infinity}

              speed={45}

            />

          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

            Jiya.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-700"
            >
              <Download size={20} />

              Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-violet-500 px-7 py-4 font-semibold transition hover:bg-violet-600"
            >
              Let's Connect

              <ArrowRight size={18} />
            </a>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-6">

            <a
              href="https://github.com/minjiyapremier123-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 hover:bg-violet-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jiya-min-b62857381/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 hover:bg-cyan-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:minjiyapremier123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 hover:bg-violet-600 transition"
            >
              <Mail />
            </a>

          </div>
          {/* Quick Stats */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-14 grid grid-cols-2 gap-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-violet-500 transition">
              <div className="flex items-center gap-3 text-violet-400">
                <GraduationCap size={24} />
                <span className="text-sm uppercase tracking-widest">
                  CGPA
                </span>
              </div>

              <h2 className="mt-3 text-4xl font-bold text-white">
                8.70
              </h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400 transition">
              <div className="flex items-center gap-3 text-cyan-400">
                <Code2 size={24} />
                <span className="text-sm uppercase tracking-widest">
                  LeetCode
                </span>
              </div>

              <h2 className="mt-3 text-4xl font-bold text-white">
                120+
              </h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-violet-500 transition">
              <div className="flex items-center gap-3 text-violet-400">
                <Briefcase size={24} />
                <span className="text-sm uppercase tracking-widest">
                  Internship
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white">
                Zidio
              </h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400 transition">
              <div className="flex items-center gap-3 text-cyan-400">
                <FolderGit2 size={24} />
                <span className="text-sm uppercase tracking-widest">
                  Projects
                </span>
              </div>

              <h2 className="mt-3 text-4xl font-bold text-white">
                2+
              </h2>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: .2,
          }}
          className="relative flex-1 flex justify-center"
        >

          <div className="relative h-[650px] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(124,58,237,0.25)]">

            {/* Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />

          </div>

        </motion.div>

      </div>
      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">

          <div className="mt-2 h-3 w-3 rounded-full bg-violet-500" />

        </div>
      </motion.div>

    </section>
  );
}