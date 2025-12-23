
// NavContents.jsx
import React from "react";
import aboutIcon from "../assets/images/aboutMeIcon.png";
import contactIcon from "../assets/images/contactMeIcon.png";

export default function NavContents({ onNavigate }) {
  // onNavigate: دالة اختيارية تستقبل مفتاح الوجهة مثلاً: "about" | "contact"
  return (
    <nav className="nav-contents" aria-label="التنقل في الصفحة">
      <button
        type="button"
        className="nav-item"
        onClick={() => onNavigate?.("about")}
        aria-label="About Me"
      >
        <img src={aboutIcon} alt="" className="nav-icon" aria-hidden="true" />
        <h3 className="caption">About Me</h3>
      </button>

      <button
        type="button"
        className="nav-item"
        onClick={() => onNavigate?.("contact")}
        aria-label="Contact Me"
      >
        <img src={contactIcon} alt="" className="nav-icon" aria-hidden="true" />
        <h3 className="caption">Contact Me</h3>
      </button>
    </nav>
  );
}
