"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Coding", href: "#coding" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          Jiya<span className="text-white inline-block ml-2">Min</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/Resume_Min_Jiya_Vinaybhai.pdf"
          download
          className="hidden lg:flex px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:scale-105 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900 border-t border-white/10"
        >
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/Resume_Min_Jiya_Vinaybhai.pdf"
            download
            className="block m-6 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3 font-semibold"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}