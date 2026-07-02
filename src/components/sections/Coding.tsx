import { motion } from "framer-motion";
import {
  Terminal,
  ArrowUpRight,
  Award,
  GitBranch,
  CheckCircle2,
  Code2,
  Trophy,
} from "lucide-react";

import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";

export default function Coding() {
  const codingProfiles = [
    {
      name: "LeetCode",
      username: "jiyamin_29",
      url: "https://leetcode.com/u/jiyamin_29/",
      icon: <SiLeetcode className="text-3xl text-yellow-400" />,
      stat: "120+ Problems Solved",
      desc: "Consistently solving DSA problems and strengthening algorithmic thinking.",
      badge: "Daily Coding Challenge Badge",
    },
    {
      name: "GitHub",
      username: "minjiyapremier123-coder",
      url: "https://github.com/minjiyapremier123-coder",
      icon: <FaGithub className="text-3xl text-white" />,
      stat: "Open Source Projects",
      desc: "Developing modern full-stack applications and contributing to open-source.",
      badge: "Active Developer",
    },
    {
      name: "CodeChef",
      username: "jiyamin_29",
      url: "https://www.codechef.com/",
      icon: <SiCodechef className="text-3xl text-amber-500" />,
      stat: "Competitive Programming",
      desc: "Learning problem solving through contests and practice.",
      badge: "Contest Participant",
    },
  ];

  const achievements = [
    {
      title: "Microsoft Learn",
      icon: <FaMicrosoft className="text-cyan-400 text-2xl" />,
      text: "Earned multiple Microsoft Learn badges across Cloud, AI and Development.",
    },
    {
      title: "GirlScript Summer of Code 2026",
      icon: <Award className="text-pink-400 w-6 h-6" />,
      text: "Selected Open Source Contributor working on real-world repositories.",
    },
    {
      title: "Nexus Summer of Code 2026",
      icon: <Trophy className="text-yellow-400 w-6 h-6" />,
      text: "Successfully participated as an Open Source Contributor.",
    },
  ];

  return (
    <section
      id="coding"
      className="relative py-28 bg-slate-950 overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Coding Journey
          </p>

          <h2 className="mt-4 text-5xl font-black">
            DSA • Open Source • Development
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Continuously improving through competitive programming,
            full-stack development and open-source contributions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-cyan-400" />
              <h3 className="uppercase tracking-widest text-sm text-slate-400">
                Coding Profiles
              </h3>
            </div>

            <div className="space-y-6">

              {codingProfiles.map((item, index) => (

                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >

                  <Card className="bg-white/5 border-white/10 hover:border-violet-500 transition-all">

                    <CardHeader>

                      <div className="flex justify-between items-center">

                        <div className="flex gap-4 items-center">

                          {item.icon}

                          <div>

                            <CardTitle>{item.name}</CardTitle>

                            <span className="text-xs text-slate-500 font-mono">
                              @{item.username}
                            </span>

                          </div>

                        </div>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowUpRight className="text-slate-400 hover:text-cyan-400" />
                        </a>

                      </div>

                    </CardHeader>

                    <CardContent>

                      <h4 className="text-xl font-bold">
                        {item.stat}
                      </h4>

                      <p className="mt-3 text-slate-400">
                        {item.desc}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs">

                        <Code2 className="w-4 h-4" />

                        {item.badge}

                      </div>

                    </CardContent>

                  </Card>

                </motion.div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="flex items-center gap-2 mb-6">
              <GitBranch className="text-violet-400" />
              <h3 className="uppercase tracking-widest text-sm text-slate-400">
                Open Source Journey
              </h3>
            </div>

            <Card className="bg-white/5 border-white/10 p-8">

              <div className="space-y-8">

                {achievements.map((item) => (

                  <div
                    key={item.title}
                    className="border-l-2 border-violet-500 pl-6"
                  >

                    <div className="flex items-center gap-3">

                      {item.icon}

                      <h4 className="font-bold text-lg">
                        {item.title}
                      </h4>

                    </div>

                    <p className="mt-3 text-slate-400 leading-7">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                <div className="flex gap-3">

                  <CheckCircle2 className="text-cyan-400 mt-1" />

                  <div>

                    <h4 className="font-bold">
                      Current Goal
                    </h4>

                    <p className="mt-2 text-slate-400 leading-7">
                      Preparing for <span className="font-semibold text-white">Google Summer of Code 2027</span> by improving DSA, contributing to open source and building impactful full-stack projects.
                    </p>

                  </div>

                </div>

              </div>

            </Card>

          </div>

        </div>
      </div>
    </section>
  );
}