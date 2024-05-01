import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const NavMenus = () => {
  const { pathname } = useLocation();

  const isActiveCn = (path) => {
    return path === pathname ? "active" : "";
  };

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        {/* home */}
        <li
          className={cn("", isActiveCn("/"))}
        >
          <a href="/"></a>
        </li>
      </ul>
    </div>
  );
};
