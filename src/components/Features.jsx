import { motion } from "motion/react";
import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-heading">
          <motion.p
            className="eyebrow features-eyebrow"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow-dot" />
            Everything in one place
          </motion.p>

          <motion.h2
            className="features-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everyone, Everything at sync
            <br />
            <em>& Novi keeps it that way.</em>
          </motion.h2>

          <motion.p
            className="features-intro"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tasks, conversations, and timelines. All in one place, so your
            team can move faster, together.
          </motion.p>
        </div>

        <div className="features-grid features-editorial-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;