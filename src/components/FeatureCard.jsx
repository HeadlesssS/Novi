import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import FeatureVisual from "./FeatureVisual";

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  return (
    <motion.article
      className={`feature-card editorial-feature editorial-feature--${index + 1} feature-card--${feature.accent}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.06 }}
    >
      <div className="editorial-feature-visual">
        <FeatureVisual type={feature.visual} Icon={Icon} />
      </div>
      <div className="feature-card-copy">
        <span className="feature-number">{feature.number}</span>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <a
          className="feature-link"
          href="#footer"
          aria-label={`Explore ${feature.title}`}
        >
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

export default FeatureCard;
