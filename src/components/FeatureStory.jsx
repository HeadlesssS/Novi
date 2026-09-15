import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { features } from "../data/features";
import unifiedWorkspaceVideo from "../assets/video/Novi.mp4";

const storyFeatures = features;
const stageNames = [
  ...storyFeatures.map((feature) => feature.shortLabel),
  "Sync",
  "Novi",
];
const stageDuration = 1700;

function StoryPiece({ feature, index, activeStage }) {
  const Icon = feature.icon;
  const isVisible = activeStage >= index;
  const isGathering = activeStage >= 4;

  return (
    <motion.div
      className={`story-piece story-piece--${index + 1} ${isVisible ? "story-piece--visible" : ""} ${isGathering ? "story-piece--gathering" : ""}`}
      initial={{ opacity: 0, scale: 0.86, y: 16 }}
      animate={
        isVisible
          ? {
              opacity: isGathering ? 0 : 1,
              scale: isGathering ? 0.72 : 1,
              y: isGathering ? 10 : 0,
            }
          : { opacity: 0, scale: 0.86, y: 16 }
      }
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="story-piece-heading">
        <Icon size={17} />
        <span>{feature.shortLabel}</span>
      </div>
      {index === 0 && (
        <div className="story-board">
          <span className="story-board-label story-board-label--queue">To do</span>
          <b>Plan launch</b>
           <span className="story-board-label story-board-label--active">In progress</span>
          <b>Design handoff</b>
           <span className="story-board-label story-board-label--done">Done</span>
        </div>
      )}
      {index === 1 && (
        <div className="story-thread">
          <p className="story-thread-note story-thread-note--clay">
            Looks good here.
          </p>
          <p className="story-thread-note story-thread-note--sage">
            Added the final pass.
          </p>
        </div>
      )}
      {index === 2 && (
        <div className="story-timeline">
          <span />
          <span />
          <span />
          <b>JUN 10</b>
          <b>JUN 17</b>
          <b>JUN 24</b>
        </div>
      )}
      {index === 3 && (
        <div className="story-import">
          <b>Trello</b>
          <b>Asana</b>
          <b>Sheet</b>
          <small>↓ Novi</small>
        </div>
      )}
    </motion.div>
  );
}

function FeatureStory() {
  const [activeStage, setActiveStage] = useState(0);
  const [started, setStarted] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const pointerStart = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!started || manualMode || reducedMotion || activeStage >= 5)
      return undefined;
    const timer = window.setTimeout(
      () => setActiveStage((stage) => stage + 1),
      stageDuration,
    );
    return () => window.clearTimeout(timer);
  }, [activeStage, manualMode, reducedMotion, started]);

  const selectStage = (stage) => {
    setActiveStage(stage);
    setManualMode(false);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart.current = { id: event.pointerId, x: event.clientX };
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      pointerStart.current = { id: event.pointerId, x: event.clientX };
    }
    setManualMode(true);
  };

  const handlePointerUp = (event) => {
    const start = pointerStart.current;
    if (!start || start.id !== event.pointerId) return;

    const distance = event.clientX - start.x;
    const threshold = 48;
    const direction =
      Math.abs(distance) >= threshold ? (distance < 0 ? 1 : -1) : 0;
    const nextStage = Math.max(
      0,
      Math.min(stageNames.length - 1, activeStage + direction),
    );

    pointerStart.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    setActiveStage(nextStage);
    setManualMode(false);
  };

  const handlePointerCancel = (event) => {
    if (!pointerStart.current || pointerStart.current.id !== event.pointerId)
      return;
    pointerStart.current = null;
    setManualMode(false);
  };

  return (
    <motion.div
      className="feature-story"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setStarted(true)}
    >
      <div
        className={`feature-story-stage ${activeStage === 5 ? "feature-story-stage--video" : ""}`}
        aria-live="polite"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div
          className={`story-canvas ${activeStage === 5 ? "story-canvas--video" : ""} ${activeStage === 4 ? "story-canvas--sync" : ""}`}
        >
          <AnimatePresence>
            {storyFeatures.map((feature, index) => (
              <StoryPiece
                key={feature.number}
                feature={feature}
                index={index}
                activeStage={activeStage}
              />
            ))}
          </AnimatePresence>
          <motion.div
            className={`story-sync ${activeStage === 4 ? "story-sync--visible" : ""}`}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={
              activeStage === 4
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.94, y: 16 }
            }
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Everyone, everything
            <br />
            <em>in sync at Novi.</em>
          </motion.div>
          <motion.div
            className={`story-unified ${activeStage === 5 ? "story-unified--visible" : ""}`}
            initial={{ opacity: 1, scale: 1, y: 18 }}
            animate={
              activeStage === 5
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.82, y: 18 }
            }
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              className="story-unified-media"
              src={unifiedWorkspaceVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Unified Novi workspace"
            />
          </motion.div>
        </div>
      </div>
      <div
        className="feature-story-controls"
        role="tablist"
        aria-label="Novi capability story stages"
      >
        {stageNames.map((name, index) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-label={`Show ${name}`}
            aria-selected={activeStage === index}
            className={activeStage === index ? "is-active" : ""}
            onClick={() => selectStage(index)}
          >
            <span />
          </button>
        ))}
      </div>
      <p className="feature-story-status">
        {activeStage === 5
          ? "Everything comes together in Novi."
          : activeStage === 4
            ? "Everyone, everything in sync at Novi."
            : `${stageNames[activeStage]} ${activeStage < 3 ? "+" : ""}`}
      </p>
    </motion.div>
  );
}

export default FeatureStory;
