import { ArrowUpRight, AtSign, Globe, Send } from "lucide-react";
import { footerLinks } from "../data/features";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="container">
        <div className="footer-top">
          {/* SIGNUP */}
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
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                required
              />

              <button
                type="submit"
                aria-label="Join Novi"
                className="join-button"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>

            <p>Join the Novi list for thoughtful product notes.</p>
          </div>

          {/* FOOTER LINKS */}
          <nav className="footer-links" aria-label="Footer navigation">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div className="footer-link-group" key={heading}>
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
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>© 2026 Novi. Made for the work that matters.</span>

          <div className="social-links">
            <a
              href="https://veelapp.com/"
              aria-label="Novi community"
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={17} />
            </a>

            <a
              href="https://veelapp.com/"
              aria-label="Novi updates"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={17} />
            </a>

            <a
              href="https://veelapp.com/"
              aria-label="Novi contact"
              target="_blank"
              rel="noreferrer"
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