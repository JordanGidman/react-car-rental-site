// import React from "react";

export default function handleNav(coords) {
  if (!document.querySelector(".nav").classList.contains(`nav-close`)) {
    document.querySelector(".nav").classList.add(`nav-close`);
  }

  const checkNavHeight = function () {
    const navHeight = document
      .querySelector(`.nav`)
      .getBoundingClientRect().height;
    let v = document.body.getBoundingClientRect().width < 900 ? 0 : navHeight;

    return v;
  };

  window.scrollTo({
    left: coords.left + window.scrollX,
    top: coords.top - checkNavHeight() + window.scrollY,
    behavior: "smooth",
  });
}
