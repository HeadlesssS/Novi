import { motion } from 'motion/react'
import { features } from '../data/features'
import FeatureCard from './FeatureCard'

function Features() {
  return <section className="features-section" id="features"><div className="container"><div className="features-heading"><motion.p className="eyebrow" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span className="eyebrow-dot" />Everything in its place</motion.p><motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>A better rhythm<br /><em>for the workday.</em></motion.h2><p className="features-intro">The tools you need, with enough breathing room to use them well.</p></div><div className="features-grid">{features.map((feature, index) => <FeatureCard key={feature.number} feature={feature} index={index} />)}</div></div></section>
}

export default Features