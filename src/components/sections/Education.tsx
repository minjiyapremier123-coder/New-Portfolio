import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 -left-32 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

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
            Education
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Academic Journey
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-violet-600 via-cyan-500 to-violet-600 rounded-full" />

          {/* Card */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative ml-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            {/* Circle */}

            <div className="absolute -left-[58px] top-10 h-10 w-10 rounded-full bg-violet-600 border-4 border-slate-950" />

            <div className="flex flex-wrap items-center gap-4">

              <GraduationCap
                className="text-violet-400"
                size={40}
              />

              <div>
                <h3 className="text-3xl font-bold">
                  Indian Institute of Information Technology Kota
                </h3>

                <p className="mt-2 text-cyan-400">
                  B.Tech • Electronics & Communication Engineering
                </p>
              </div>

            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">

              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-6">
                <Calendar className="text-cyan-400" />

                <h4 className="mt-4 font-semibold">
                  Duration
                </h4>

                <p className="mt-2 text-slate-400">
                  2025 – 2029
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-6">
                <Award className="text-violet-400" />

                <h4 className="mt-4 font-semibold">
                  Current CGPA
                </h4>

                <p className="mt-2 text-slate-400">
                  8.70 / 10
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-6">
                <GraduationCap className="text-cyan-400" />

                <h4 className="mt-4 font-semibold">
                  Status
                </h4>

                <p className="mt-2 text-slate-400">
                  Currently Pursuing
                </p>
              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Pursuing a Bachelor of Technology in Electronics and Communication
              Engineering at IIIT Kota. Alongside academics, I actively build
              scalable full-stack applications, solve Data Structures &
              Algorithms problems, contribute to open-source initiatives, and
              continuously strengthen my software engineering skills.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}