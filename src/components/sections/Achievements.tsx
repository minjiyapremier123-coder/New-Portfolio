import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Trophy,
  Star,
} from "lucide-react";

const achievements = [
  {
    title: "Microsoft Learn Student",
    desc: "Earned multiple Microsoft Learn badges by completing cloud, AI and development learning paths.",
    icon: <Award className="text-cyan-400" size={34} />,
  },
  {
    title: "GirlScript Summer of Code",
    desc: "Selected Open Source Contributor for GSSoC and actively contributed to community projects.",
    icon: <BadgeCheck className="text-violet-400" size={34} />,
  },
  {
    title: "Nexus Summer of Code",
    desc: "Open Source Contributor participating in collaborative software development.",
    icon: <Trophy className="text-cyan-400" size={34} />,
  },
  {
    title: "Aspiring GSoC'27",
    desc: "Preparing for Google Summer of Code through consistent open-source contributions and development.",
    icon: <Star className="text-yellow-400" size={34} />,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Achievements
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Certifications & Recognition
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Milestones that reflect my learning journey, open-source
            contributions and continuous technical growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-8">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}