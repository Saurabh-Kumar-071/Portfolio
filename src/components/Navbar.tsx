import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { navLinks, profile } from "../data/portfolio";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active indicator
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeMenu]);

  return (
    <header className="navbar-wrapper">
      <nav
        className={`navbar navbar--glass ${scrolled ? "navbar--scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#" className="navbar__logo" aria-label="Home">
          {profile.name.split(" ")[0]}
          <span className="navbar__logo-dot">.</span>
        </a>

        <div className="navbar__right">
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun size={17} className="theme-icon theme-icon--sun" />
            ) : (
              <Moon size={17} className="theme-icon theme-icon--moon" />
            )}
          </button>

          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="navbar__mobile-overlay" onClick={closeMenu} />
          <div className="navbar__mobile-panel">
            <ul className="navbar__mobile-links" role="list">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`navbar__mobile-link ${
                        isActive ? "navbar__mobile-link--active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="navbar__mobile-theme">
              <button
                type="button"
                className="navbar__mobile-theme-btn"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
