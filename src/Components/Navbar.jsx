import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-[8vh] min-h-15 bg-[#f6f5f3]/90 backdrop-blur-md">

      <div className="h-full w-full flex items-center justify-between px-5 sm:px-8 md:px-10 lg:px-14">

        {/* LOGO */}
        <a href="#home" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Manav Portfolio Logo"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-10">

            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative py-2 text-sm lg:text-base font-medium transition-all duration-300
                    hover:-translate-y-1 hover:drop-shadow-lg

                    after:absolute after:left-0 after:bottom-0
                    after:h-0.5 after:bg-[#a38671]
                    after:transition-all after:duration-300

                    ${
                      activeSection === item.id
                        ? "text-[#a38671] after:w-full"
                        : "text-[#0a0a0a] after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-7 bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-7 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-7 bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#f6f5f3] border-t border-black/10 overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-5 gap-5">

          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`block text-base font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                  activeSection === item.id
                    ? "text-[#a38671]"
                    : "text-[#0a0a0a]"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;