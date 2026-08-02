import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import Button from "../common/Button";
import Container from "../common/Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    {
      name: "Features",
      to: "features",
    },
    {
      name: "Pricing",
      to: "pricing",
    },
    {
      name: "Testimonials",
      to: "testimonials",
    },
    {
      name: "FAQ",
      to: "faq",
    },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-all duration-300 ${isScrolled
          ? "h-16 shadow-lg shadow-slate-900/5"
          : "h-20"
          }`}
      >
        <Container className="flex h-full items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={700}
                offset={-90}
                spy={true}
                className="cursor-pointer font-medium text-slate-600 transition-colors hover:text-emerald-600"
                activeClass="text-emerald-600"
              >
                {link.name}
              </ScrollLink>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/login">
              <Button variant="secondary">
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button>
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-slate-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </Container>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 right-0 top-20 z-50 border-b border-slate-200 bg-white shadow-xl lg:hidden"
            >
              <Container className="py-8">
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  className="flex flex-col gap-6"
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -20,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    >
                      <ScrollLink
                        to={link.to}
                        smooth={true}
                        duration={700}
                        offset={-90}
                        spy={true}
                        onClick={() => setIsOpen(false)}
                        className="block cursor-pointer text-lg font-medium text-slate-700 transition hover:text-emerald-600"
                        activeClass="text-emerald-600"
                      >
                        {link.name}
                      </ScrollLink>
                    </motion.div>
                  ))}

                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="secondary"
                        className="w-full"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="w-full">
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </motion.nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;