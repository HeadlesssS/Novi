import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import productVisual from "../assets/img/NoviCTA.png";
import mobileProductVisual from "../assets/img/NoviBoard.png";
import flowerSticker from "../assets/img/stickers/flower.png";

function NoviCTA() {
  return (
    <section className="novi-cta-section" aria-labelledby="novi-cta-title">
      <div className="container">
        <div className="novi-cta">
          <div className="novi-cta-copy">
            <p className="novi-cta-eyebrow">Built for small teams</p>
            <h2 id="novi-cta-title">Your Team's next tab should be Novi.</h2>
            <p className="novi-cta-description">
              Start organizing the work instead of organizing your tools.
            </p>
            <a className="button button--cta" href="#footer">
              Start free <ArrowRight size={17} />
            </a>
          </div>
          <div className="novi-cta-art" aria-hidden="true">
            <span className="organic-shape organic-shape--one" />
            <span className="organic-shape organic-shape--two" />
            <span className="organic-shape organic-shape--three" />
            <span className="organic-line organic-line--one" />
            <span className="organic-line organic-line--two" />
            <motion.img
              className="novi-cta-product novi-cta-product--desktop"
              src={productVisual}
              alt="Novi workspace dashboard"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              className="novi-cta-product novi-cta-product--mobile"
              src={mobileProductVisual}
              alt="Novi board workspace"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        
        <img
          className="cta-flower-sticker"
          src={flowerSticker}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default NoviCTA;
