import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import growthSticker from "../assets/img/stickers/growthh.png";
import halfSunSticker from "../assets/img/stickers/sun.png";
import vineSticker from "../assets/img/stickers/vine.png";
import FeatureStory from "./FeatureStory";

/*
  CINEMATIC TIMING
  ----------------
  The sequence is paced around natural reading:
  
  0.00s  → page settles
  0.20s  → eyebrow appears
  0.52s  → headline begins
  1.15s  → headline finishes
  1.40s  → description appears
  1.80s  → actions appear
  2.30s  → feature story begins
*/

const blurReveal = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(12px)",
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.2,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const softReveal = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-copy">
        {/* EYEBROW */}
        <motion.p
          className="eyebrow"
          variants={softReveal}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <span className="eyebrow-dot" />
          BUILT FOR SMALL TEAMS
        </motion.p>

        {/* MAIN HERO TITLE */}
        <motion.h1
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          custom={0.52}
        >
          Less switching.
          <br />
          <em>More shipping.</em>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="hero-description"
          variants={softReveal}
          initial="hidden"
          animate="visible"
          custom={1.42}
        >
          Novi brings your tasks, conversations, and timelines into one calm,
          thoughtful workspace built for small, fast-moving teams.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          className="hero-actions"
          variants={softReveal}
          initial="hidden"
          animate="visible"
          custom={1.82}
        >
          <a className="button button--dark" href="#footer">
            Start shipping
            <ArrowRight size={17} />
          </a>

          <a className="text-link" href="#hero-story">
            <span className="play-icon">
              <Play size={12} fill="currentColor" />
            </span>
            See how it works
          </a>
        </motion.div>
      </div>

      {/* FEATURE STORY */}
      <motion.div
        className="hero-feature-story-wrap container"
        id="hero-story"
        variants={softReveal}
        initial="hidden"
        animate="visible"
        custom={2.28}
      >
        {/* DECORATIVE STICKERS */}
        <img
          className="hero-story-sticker hero-story-sticker--growth"
          src={growthSticker}
          alt=""
          aria-hidden="true"
        />

        <img
          className="hero-story-sticker hero-story-sticker--sun"
          src={halfSunSticker}
          alt=""
          aria-hidden="true"
        />

        <img
          className="hero-story-sticker hero-story-sticker--vine"
          src={vineSticker}
          alt=""
          aria-hidden="true"
        />

        {/* FEATURE CONTENT */}
        <div className="hero-feature-story-content">
          <FeatureStory />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;