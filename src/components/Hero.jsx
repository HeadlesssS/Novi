import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import growthSticker from "../assets/img/stickers/growthh.png";
import halfSunSticker from "../assets/img/stickers/sun.png";
import vineSticker from "../assets/img/stickers/vine.png";
import FeatureStory from "./FeatureStory";

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-copy">
        <motion.p
          className="eyebrow"
          variants={entrance}
          initial="hidden"
          animate="visible"
          custom={0.05}
        >
          <span className="eyebrow-dot" /> BUILT FOR SMALL TEAMS
        </motion.p>
        <motion.h1
          variants={entrance}
          initial="hidden"
          animate="visible"
          custom={0.12}
        >
          Less switching.
          <br />
          <em>More shipping.</em>
        </motion.h1>
        <motion.p
          className="hero-description"
          variants={entrance}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Novi brings your tasks, conversations, and timelines into one calm,
          thoughtful workspace built for small, fast-moving teams.
        </motion.p>
        <motion.div
          className="hero-actions"
          variants={entrance}
          initial="hidden"
          animate="visible"
          custom={0.28}
        >
          <a className="button button--dark" href="#footer">
            Start shipping <ArrowRight size={17} />
          </a>
          <a className="text-link" href="#hero-story">
            <span className="play-icon">
              <Play size={12} fill="currentColor" />
            </span>{" "}
            See how it works
          </a>
        </motion.div>
      </div>
      <motion.div
        className="hero-feature-story-wrap container"
        id="hero-story"
        variants={entrance}
        initial="hidden"
        animate="visible"
        custom={0.38}
      >
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

          <div className="hero-feature-story-content">
    <FeatureStory />
  </div>
      </motion.div>
    </section>
  );
}

export default Hero;
