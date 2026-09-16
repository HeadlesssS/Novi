import { motion } from "motion/react";
import { features } from "../data/features";
import FeatureCard from "./FeatureCard";
import flowerSticker from "../assets/img/stickers/flower.png";

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-heading">
          <motion.p
            className="eyebrow features-eyebrow"
            initial={{
              opacity: 0,
              y: 18,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow-dot" />
            Everything in one place
          </motion.p>

          <motion.h2
            className="features-title"
            initial={{
              opacity: 0,
              y: 28,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Everyone, Everything in sync
            <br />
            <em>&amp; Novi keeps it that way.</em>
          </motion.h2>

          <motion.p
            className="features-intro"
            initial={{
              opacity: 0,
              y: 18,
              filter: "blur(7px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Tasks, conversations, and timelines. All in one place, so your team
            can move faster, together.
          </motion.p>
        </div>

        <div className="features-grid features-editorial-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>

        <div className="features-flower-bundle" aria-hidden="true">
          <img className="flower-side flower-left" src={flowerSticker} alt="" />
          <img className="flower-center" src={flowerSticker} alt="" />
          <img
            className="flower-side flower-right"
            src={flowerSticker}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
