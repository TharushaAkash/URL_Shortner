import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[80px] fixed bg-accent flex items-center px-4 sm:px-6 text-white z-40">

      {/* Left - Logo */}
      <div className="flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWparqjwiRqDDUL0bpSfatK1zGaYYIZbElDc3DEUP8A&s"
          alt="logo"
          className="h-12 sm:h-16"
        />
      </div>

      {/* Center - Nav (hidden on mobile) */}
      <nav className="hidden sm:flex justify-center">
        <ul className="flex gap-6 sm:gap-10">
          <li className="cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 p-2 rounded-md hover:text-white hover:bg-none hover:border-2 hover:border-blue-600">
            Home
          </li>
          <li className="cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 p-2 rounded-md hover:text-white hover:bg-none hover:border-2 hover:border-blue-600">
            <a href="https://github.com/TharushaAkash/URL_Shortner.git" target="_blank">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Right - Hamburger (mobile only) */}
      <div className="flex-1 flex justify-end sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Right spacer (desktop) */}
      <div className="hidden sm:flex flex-1"></div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-accent flex flex-col items-center gap-4 py-5 sm:hidden z-50 border-t border-slate-700">
          <a
            href="#"
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-2 rounded-md w-[80%] text-center"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="https://github.com/TharushaAkash/URL_Shortner.git"
            target="_blank"
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-2 rounded-md w-[80%] text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}