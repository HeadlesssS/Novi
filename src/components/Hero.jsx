import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'motion/react'
import video from '../assets/video/Novi.mp4'

const entrance = { hidden: { opacity: 0, y: 24 }, visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }) }

function Hero() {
  return <section className="hero-section" id="top"><div className="container hero-copy"><motion.p className="eyebrow" variants={entrance} initial="hidden" animate="visible" custom={0.05}><span className="eyebrow-dot" /> The calmer way to get things done</motion.p><motion.h1 variants={entrance} initial="hidden" animate="visible" custom={0.12}>Less switching.<br /><em>More shipping.</em></motion.h1><motion.p className="hero-description" variants={entrance} initial="hidden" animate="visible" custom={0.2}>Novi brings your tasks, conversations, and timelines into one thoughtful workspace, so your team can focus on the work that matters.</motion.p><motion.div className="hero-actions" variants={entrance} initial="hidden" animate="visible" custom={0.28}><a className="button button--dark" href="#footer">Start shipping <ArrowRight size={17} /></a><a className="text-link" href="#hero-video"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See how it works</a></motion.div></div><motion.div className="hero-video-wrap container" id="hero-video" variants={entrance} initial="hidden" animate="visible" custom={0.38}><div className="video-frame"><video src={video} autoPlay muted loop playsInline aria-label="Novi product workspace demo" /></div></motion.div></section>
}

export default Hero