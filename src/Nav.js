import React, { useState, useEffect } from "react";
import "./Nav.css";
export const Nav = () => {
  const [show, setShow] = useState(false);

  const transistionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar);

    return () => window.removeEventListener("scroll", transistionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          className="nav_logo"
          alt="netflix logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <img
          className="nav_avatar"
          alt="netflix avatar"
          src="  https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </div>
  );
};
