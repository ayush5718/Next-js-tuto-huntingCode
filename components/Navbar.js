import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="w-full py-6 px-4 md:px-8 flex justify-between items-center bg-white shadow-md  relative">
        <div className="flex items-center gap-2">
          <Image src="/icons8-blog-24.ico" width={32} height={32} alt="Logo" />
          <span className="text-2xl font-bold text-purple-700">
            Hunting Coder
          </span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-lg">
          <li>
            <Link href="/" className="hover:text-purple-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-purple-600 transition">
              Blog
            </Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-purple-700 mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-purple-700 mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-purple-700 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 py-6 px-8 font-semibold text-lg md:hidden z-50">
            <li>
              <Link
                href="/"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
