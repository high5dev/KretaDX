import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const MenuItem = ({ children, to, title, icon }) => {
  const { pathname } = useLocation();

  let isActive = false;

  const current = pathname.split(/[?#]/)[0];
  if (current === to || current.indexOf(to) > -1) {
    isActive = true;
  }

  return (
    <div className="menu-item">
      <Link className={clsx("menu-link", { active: isActive })} to={to}>
        <span className="menu-title">{title}</span>
      </Link>
      {children}
    </div>
  );
};

export { MenuItem };
