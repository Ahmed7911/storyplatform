
import React from "react";
import "./SideBar.css"
export default function SideBar({
  companyLogo,
  title,
  menuItems = [ 
  { label: "Dashboard", icon: "🏠", link: "/dashboard" },
  { label: "Projects", icon: "📂", link: "/projects" },
  { label: "Teams", icon: "👥", link: "/teams" },
  { label: "Reports", icon: "📊", link: "/reports" },
  { label: "Settings", icon: "⚙️", link: "/settings" },

  ],
  onSelect = (item) => {console.log("clicked", item)},
  activeIndex = 0,
}) {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar-header">
        {companyLogo && (
          <img
            src={companyLogo}
            alt={`${title || "Company"} logo`}
            className="company-logo"
          />
        )}
        {title && <h1 className="sidebar-title">{title}</h1>}
      </div>

      <div className="sidebar-menu" role="menu">
        {menuItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={index} role="none">
              <h3
                className={`sidebar-menu-item ${isActive ? "active" : ""}`}
                role="menuitem"
                onClick={() => onSelect(item, index)}
              >
                {/* If item is a string it renders directly; if it's an object, use label */}
                <span className="menu-item-label">
                  {typeof item === "string" ? item : item?.label || "Item"}
                </span>
                {/* Optional: Right arrow icon */}
                <svg
                  className="menu-item-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </h3>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
