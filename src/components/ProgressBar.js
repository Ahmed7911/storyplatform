
import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ progress }) {
  const safeProgress = Math.max(0, Math.min(100, Number(progress ) || 0));
  const remaining = 100 - safeProgress;

  return (
    <div className="progress-container" >
      <div className="progress-header">
        <span className="label">Your Progress</span>
        <span className="value" aria-live="polite">{safeProgress}%</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeProgress}
      >
        <div
          className="progressBar"
          style={{ flexBasis: `${safeProgress}%` }}
        >
          {safeProgress}%
        </div>

        <div
          className="progressBarBacklock"
          style={{ flexBasis: `${remaining}%` }}
        >
          {remaining>0 && `${remaining}% left` }
          
        </div>
      </div>

      {safeProgress <= 25 && <div className="hint">Good start</div>}
      {safeProgress > 25 && safeProgress <= 50 && (
        <div className="hint">Keep going</div>
      )}
      {safeProgress > 50 && safeProgress <= 75 && (
        <div className="hint">More than half way there</div>
      )}
      {safeProgress > 75 && safeProgress < 100 && (
        <div className="hint">Almost done</div>
      )}
      {safeProgress === 100 && <div className="hint success">Completed!</div>}
    </div>
  );
}
