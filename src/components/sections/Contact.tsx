import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "minjiyapremier123@gmail.com",
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      link: "mailto:minjiyapremier123@gmail.com",
    },
    {
      title: "Phone",
      value: "+91 7990204640",
      icon: <Phone className="w-6 h-6 text-violet-400" />,
      link: "tel:+917990204640",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/jiya-min",
      icon: <FaLinkedin className="text-blue-400 text-2xl" />,
      link: "https://www.linkedin.com/in/jiya-min-b62857381/",
    },
    {
      title: "GitHub",
      value: "github.com/minjiyapremier123-coder",
      icon: <FaGithub className="text-white text-2xl" />,
      link: "https://github.com/minjiyapremier123-coder",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-950 overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto leading-8">
            I'm always open to internships, collaborations, freelance work,
            hackathons, and exciting opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {contacts.map((item, index) => (

            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">
                  {item.icon}

                  <div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      {item.value}
                    </p>

                  </div>
                </div>

                <ArrowUpRight className="text-cyan-400" />

              </div>
            </motion.a>

          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 p-10 text-center"
        >
          <h3 className="text-3xl font-bold">
            Ready to collaborate?
          </h3>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-8">
            Whether it's a Full Stack project, Open Source contribution,
            internship opportunity, or hackathon team-up, I'd love to connect.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-3 font-semibold hover:bg-cyan-600 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3">
              <MapPin className="text-violet-400" size={18} />
              Ahmedabad, Gujarat, India
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}