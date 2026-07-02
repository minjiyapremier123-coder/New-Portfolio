import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          {/* Left */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Jiya Min
            </h2>

            <p className="mt-3 text-slate-400">
              Full Stack Developer • Open Source Contributor • Problem Solver
            </p>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5">

            <a
              href="https://github.com/minjiyapremier123-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-violet-600"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/jiya-min-b62857381/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-cyan-500"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:minjiyapremier123@gmail.com"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-pink-500"
            >
              <MdEmail size={22} />
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Jiya Min. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Designed & Developed with
            <Heart
              size={16}
              className="text-red-500"
              fill="currentColor"
            />
            using React + TypeScript
          </p>

        </div>

      </div>
    </footer>
  );
}