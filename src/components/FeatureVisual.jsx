import { Check, Clock } from "lucide-react";
import boardIcon from "../assets/img/icons/board.png";
import threadsIcon from "../assets/img/icons/threads.png";
import timelineIcon from "../assets/img/icons/timeline.png";
import worksIcon from "../assets/img/icons/works.png";

const visualIcons = {
  board: boardIcon,
  thread: threadsIcon,
  timeline: timelineIcon,
  import: worksIcon,
};

function FeatureVisual({ type, Icon }) {
  const iconSrc = visualIcons[type] ?? visualIcons.import;
  const iconBadge = (
    <img src={iconSrc} alt="" className="feature-visual-icon" width={20} height={20} />
  );

  if (type === "board")
    return (
      <div className="feature-visual board-visual">
        {iconBadge}
        <div className="board-column">
          <span>TO DO</span>
          <div className="mini-task">
            <b>Research notes</b>
            <small>Today · 2 comments</small>
          </div>
          <div className="mini-task mini-task--pale">
            <b>Outline launch</b>
            <small>Tomorrow</small>
          </div>
        </div>
        <div className="board-column board-column--active">
          <span>IN PROGRESS</span>
          <div className="mini-task mini-task--lift">
            <b>Design handoff</b>
            <small>
               <Clock size={10} strokeWidth={2} aria-hidden="true" /> Maya · drafting· 68%
            </small>
          </div>
        </div>
      </div>
    );
  if (type === "thread")
    return (
      <div className="feature-visual thread-visual">
        {iconBadge}
        <div className="thread-line" />
        <div className="comment-bubble comment-bubble--one">
          <span className="avatar avatar--orange">J</span>
          <p>
            <b>Jules</b> This is feeling good.
          </p>
          <small>just now</small>
        </div>
        <div className="comment-bubble comment-bubble--two">
          <span className="avatar avatar--green">M</span>
          <p>
            <b>Maya</b> Added the final pass.
          </p>
          <small>2m ago</small>
        </div>
        <span className="thread-tag">
          <Icon size={14} /> 4 replies
        </span>
      </div>
    );
  if (type === "timeline")
    return (
      <div className="feature-visual timeline-visual">
        {iconBadge}
        <div className="timeline-months">
          <span>JUN 10</span>
          <span>JUN 17</span>
          <span>JUN 24</span>
        </div>
        <div className="timeline-row">
          <span>Website refresh</span>
          <b className="timeline-bar timeline-bar--sage" />
        </div>
        <div className="timeline-row">
          <span>Launch campaign</span>
          <b className="timeline-bar timeline-bar--butter" />
        </div>
        <div className="timeline-row">
          <span>Customer stories</span>
          <b className="timeline-bar timeline-bar--clay" />
        </div>
        <div className="today-line">
          <i>today</i>
        </div>
      </div>
    );
  return (
    <div className="feature-visual import-visual">
      {iconBadge}
      <div className="import-window">
        <span className="window-dots" />
        <b>Bring your work with you</b>
        <p>Move your projects over in a few clicks.</p>
        <div className="import-source">
          <span className="source-icon source-icon--trello">T</span> Trello{" "}
          <span>
            Ready <strong>✓</strong>
          </span>
        </div>
        <div className="import-source">
          <span className="source-icon source-icon--asana">✳</span> Asana{" "}
          <span className="import-status">
            <Check size={11} strokeWidth={2} aria-hidden="true" /> Synced
 -         </span>
        </div>
      </div>
      <div className="import-sticker">
        <Icon size={17} /> 5 min setup
      </div>
    </div>
  );
}

export default FeatureVisual;