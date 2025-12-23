import React from 'react';
import './LinkButto.css';
export default function LinkButton({ captian, linkedTo, LinkIcon }) {
  return (
    <a href={linkedTo} className="link-button" aria-label={captian}>
      <span className="button-caption">{captian}</span>
      {LinkIcon && <img src={LinkIcon} alt="" className="button-icon" />}
    </a>
  );
}
