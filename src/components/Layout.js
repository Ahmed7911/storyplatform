
// components/Layout.jsx
import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./SideBar"; // your styled sidebar component
import "./SideBar"; // the CSS I shared earlier (or Tailwind version)

export default function Layout({ menuItems = [], onMenuSelect }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Map labels to routes
  const routeByLabel = {
    Home: "/",
    Profile: "/profile",
    Settings: "/settings",
  };

  const activeIndex = Math.max(
    0,
    menuItems.findIndex((label) => routeByLabel[label] === location.pathname)
  );

  const handleSelect = (label) => {
    if (label === "Logout") {
      onMenuSelect?.(label);
      // optional: navigate to login after logout
      navigate("/login", { replace: true });
      return;
    }
    const path = routeByLabel[label] || "/";
    navigate(path);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#fff" }}>
      <SideBar
        companyLogo="/logo.svg"
        title="My App"
        menuItems={menuItems}
        activeIndex={activeIndex === -1 ? 0 : activeIndex}
        onSelect={(_, idx) => handleSelect(menuItems[idx])}
      />
      <main style={{ flex: 1, padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
