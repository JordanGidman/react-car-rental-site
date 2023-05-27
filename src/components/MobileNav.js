import React from "react";

export default function MobileNav() {
  const openMobileNav = function () {
    document.querySelector(".nav").classList.toggle(`nav-close`);
  };

  return (
    <nav className="mobile-nav">
      <div className="logo">JGR</div>
      <button className="burger-menu" onClick={openMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mobile-nav-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}
