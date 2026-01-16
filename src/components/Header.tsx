"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/about", label: "ABOUT US" },
  { href: "/flow", label: "FLOW" },
  { href: "/catalog", label: "CATALOG" },
  { href: "/reserve", label: "RESERVE" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 min-h-0 min-w-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.span
                className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                L&apos;ESTHÈTE
              </motion.span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 flex flex-col justify-center items-center w-11 h-11 focus:outline-none"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <motion.span
                className="block w-6 h-[1.5px] bg-text mb-1.5"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-6 h-[1.5px] bg-text"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-[1.5px] bg-text mt-1.5"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.ul className="space-y-8 md:space-y-10">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group inline-block"
                      >
                        <span className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-text transition-colors duration-300 group-hover:text-primary">
                          {link.label}
                        </span>
                        <motion.div
                          className="h-[1px] bg-primary mt-2"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4 }}
                          style={{ transformOrigin: "left" }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Decorative Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-serif text-sm tracking-[0.3em] text-text mt-16 md:mt-20"
                >
                  Private Tailoring for the Noble Whim
                </motion.p>
              </div>
            </div>

            {/* Background Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] pointer-events-none"
            >
              <div className="w-full h-full rounded-full border border-primary" />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
