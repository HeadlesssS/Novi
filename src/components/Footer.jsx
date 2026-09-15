import { ArrowUpRight, AtSign, Globe, Send } from "lucide-react";
import { footerLinks } from "../data/features";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-signup">
            <Logo light />
            <h2>
              Make space
              <br />
              <em>for good work.</em>
            </h2>
            <form onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="email">
                Your email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                required
              />
              <button type="submit" aria-label="Join Novi">
                <ArrowUpRight size={20} />
              </button>
            </form>
            <p>Join the Novi list for thoughtful product notes.</p>
          </div>
          <div className="footer-links">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3>{heading}</h3>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Novi. Made for the work that matters.</span>
          <div className="social-links">
            <a href="https://veelapp.com/" aria-label="Novi community">
              <Globe size={17} />
            </a>
            <a
              href="https://www.instagram.com/veel_app//"
              aria-label="Novi updates"
            >
              <Send size={17} />
            </a>
            <a
              href="https://www.instagram.com/veel_app/"
              aria-label="Novi contact"
            >
              <AtSign size={17} />
            </a>
          </div>
          <div className="footer-legal">
            <a href="#footer">Privacy</a>
            <a href="#footer">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
