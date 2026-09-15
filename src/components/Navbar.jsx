import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <nav className="nav container" aria-label="Main navigation">
        <Logo />
        <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          <a href="#features" onClick={closeMenu}>
            Why Novi
          </a>
          <a href="#features" onClick={closeMenu}>
            Features
          </a>
          <a href="#footer" onClick={closeMenu}>
            About
          </a>
          <a
            className="nav-cta nav-cta--desktop"
            href="#footer"
            onClick={closeMenu}
          >
            Get Novi <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="mobile-nav-actions">
          <a
            className="nav-cta nav-cta--mobile"
            href="#footer"
            onClick={closeMenu}
          >
            Get Novi <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
