import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import boardsImage from "../assets/img/boards.png";
import threadsImage from "../assets/img/threads.png";
import timelineImage from "../assets/img/timeline.png";
import importImage from "../assets/img/import.png";
import { useEffect, useState } from "react";

import "../ProductPage.css";
const productFeatures = [
  {
    number: "01",
    title: "Boards",
    headline: "Sprint planning without 40 open spreadsheets",
    description:
      "Track tasks, assign owners, and manage sprint backlogs with zero clutter. Everything updates in real time so your team actually stays on schedule.",
    cta: "Explore Boards",
    accent: "#A3301E",
    image: boardsImage,
  },
  {
    number: "02",
    title: "Threads",
    headline: "Keep discussions attached directly to the work",
    description:
      "No more digging through Slack or email threads to find context. Conversations live right alongside your tasks so decisions never get lost.",
    cta: "View Threading",
    accent: "#5B7180",
    image: threadsImage,
  },
  {
    number: "03",
    title: "Timeline",
    headline: "One shared roadmap everyone can actually see",
    description:
      "Visualize project milestones, spot bottlenecks before they happen, and adjust deadlines with a single drag-and-drop view.",
    cta: "See Timelines",
    accent: "#B58B39",
    image: timelineImage,
  },
  {
    number: "04",
    title: "Imports",
    headline: "Switch in 60 seconds without losing data",
    description:
      "Bring over your existing projects from Trello, Asana, or CSV files in two clicks. Zero downtime, zero setup hassle.",
    cta: "Try Integrations",
    accent: "#71856B",
    image: importImage,
  },
];

function BlurReveal({ children, className = "" }) {
  return (
    <motion.span
      className={`blur-reveal ${className}`}
      initial={{
        opacity: 0,
        filter: "blur(18px)",
        y: 28,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  );
}

function ProductPage() {
  const [activeFeature, setActiveFeature] = useState(productFeatures[0]);
  const [modalFeature, setModalFeature] = useState(null);
useEffect(() => {
  const hash = window.location.hash;

  if (!hash) return;

  const scrollToSection = () => {
    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Wait for the page/layout to be rendered
  requestAnimationFrame(scrollToSection);
}, []);
  return (
    <div className="product-page">
      {/* HERO */}

      <section className="product-hero">
        <div className="container">
          <motion.p
            className="product-eyebrow"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              y: 20,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Built for small teams
          </motion.p>

          <h1 className="product-hero-title">
            <BlurReveal className="product-title-line">
              One workspace.
            </BlurReveal>

            <BlurReveal className="product-title-line product-title-line--accent">
              <em>Less switching.</em>
            </BlurReveal>
          </h1>

          <motion.p
            className="product-hero-copy"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 20,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Everything your team needs to move from idea to shipped without
            constantly switching between tools.
          </motion.p>

          <motion.a
            href="#product-story"
            className="product-scroll-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            Scroll to explore
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </motion.a>
        </div>
      </section>

      {/* STICKY STORY */}

      <section className="product-story" id="product-story">
        <div className="container">
          <div className="product-story-grid">
            {/* STICKY LEFT */}

            <div className="product-story-sticky">
              <div className="product-story-intro">
                <span>Everything in one place</span>

                <h2>
                  Work should feel
                  <br />
                  <em>connected.</em>
                </h2>

                <p>Four simple ways Novi keeps your team's work together.</p>
              </div>

              <div className="product-story-progress">
                {productFeatures.map((feature) => (
                  <div className="product-progress-item" key={feature.number}>
                    <span>{feature.number}</span>

                    <div className="product-progress-track">
                      <motion.div
                        className="product-progress-fill"
                        animate={{
                          scaleX:
                            activeFeature?.number === feature.number ? 1 : 0,
                        }}
                        style={{
                          transformOrigin: "left",
                          backgroundColor: feature.accent,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCROLLING FEATURES */}

            <div className="product-story-list">
              {productFeatures.map((feature, index) => (
                <motion.article
                  key={feature.number}
                   id={feature.title.toLowerCase()}
                  className="product-story-feature"
                  initial={{
                    opacity: 0.2,
                    y: 100,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    amount: 0.65,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onViewportEnter={() => setActiveFeature(feature)}
                  style={{
                    "--feature-accent": feature.accent,
                  }}
                >
                  <div className="product-feature-card">
                    {/* TOP */}

                    <div className="product-feature-card-top">
                      <span className="product-feature-index">
                        {feature.number}
                      </span>

                      <span className="product-feature-label">
                        Novi / {feature.title}
                      </span>
                    </div>

                    {/* VISUAL */}

                    <div className="product-feature-visual">
                    
<div className="product-feature-visual">
  <img
    src={feature.image}
    alt={`${feature.title} feature preview`}
    className="product-feature-image"
  />
</div>
                    </div>

                    {/* CONTENT */}

                    <div className="product-feature-card-bottom">
                      <div className="product-feature-copy">
                        <h3>{feature.title}</h3>

                        <h4>{feature.headline}</h4>

                        <p>{feature.description}</p>
                      </div>

                      {/* CTA OPENS MODAL */}

                      <motion.button
                        type="button"
                        className="feature-open-button"
                        whileHover={{
                          scale: 1.08,
                          rotate: -4,
                        }}
                        whileTap={{
                          scale: 0.94,
                        }}
                        onClick={() => setModalFeature(feature)}
                        aria-label={`${feature.cta} for ${feature.title}`}
                      >
                        <span>{feature.cta}</span>
                        <ArrowRight size={18} />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE MODAL */}

      <AnimatePresence>
        {modalFeature && (
          <motion.div
            className="product-modal-backdrop"
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            onClick={() => setModalFeature(null)}
          >
            <motion.div
              className="product-modal"
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
                rotateX: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: 0.94,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* CLOSE */}

              <button
                className="product-modal-close"
                type="button"
                onClick={() => setModalFeature(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* NUMBER */}

              <span
                className="product-modal-number"
                style={{
                  color: modalFeature.accent,
                }}
              >
                {modalFeature.number}
              </span>

              {/* TITLE */}

              <span className="product-modal-label">
                Novi / {modalFeature.title}
              </span>

              {/* HEADLINE */}

              <h2>{modalFeature.headline}</h2>

              {/* BODY */}

              <p>{modalFeature.description}</p>

              <div className="product-feature-visual">
                <img
                  src={modalFeature.image}
                  alt={`${modalFeature.title} feature preview`}
                  className="product-feature-image"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductPage;
