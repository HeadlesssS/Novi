import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import FeatureVisual from "./FeatureVisual";

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.article
      className={`feature-card editorial-feature editorial-feature--${
        index + 1
      } feature-card--${feature.accent}`}
      style={{
        "--feature-accent": feature.accentColor,
      }}
      initial={{
        opacity: 0.55,
        y: 45,
        filter: "blur(3px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        amount: 0.3,
        once: false,
        margin: "-10% 0px -10% 0px",
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
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
  href={`/product#${feature.slug}`}
  aria-label={`Explore ${feature.title}`}
>
  <ArrowUpRight size={16} />
</a>

        
      </div>
    </motion.article>
  );
}

export default FeatureCard;