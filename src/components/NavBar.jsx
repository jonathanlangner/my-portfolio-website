import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = function (currentState) {
  let presentState = currentState;

  const [activePgHome, inActivePgHome] = useState();
  const [activePgPortfolio, inActivePgPortfolio] = useState();
  const [activePgBlog, inActivePgBlog] = useState();

  useEffect(() => {
    if (presentState.currentState === 0) {
      inActivePgHome(true);
      inActivePgPortfolio(false);
      inActivePgBlog(false);
    } 
    else if(presentState.currentState === 1) {
      inActivePgHome(false);
      inActivePgPortfolio(true);
      inActivePgBlog(false);
    }
    else if(presentState.currentState === 2) {
      inActivePgHome(false);
      inActivePgPortfolio(false);
      inActivePgBlog(true);
    }
    else{
      inActivePgHome(false);
      inActivePgPortfolio(false);
      inActivePgBlog(true);
    }
  }, [presentState.currentState]);

  return (
    <nav className="nav justify-content-center bg-light">
      <ul className="nav nav-fill">
        <li className="nav-item">
          <NavLink
            to="/"
            title="Home"
            className={activePgHome ? "nav-link active-page" : "nav-link"}
            href="https://jonathanlangner.me/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            title="My Portfolio"
            className={activePgPortfolio ? "nav-link active-page" : "nav-link"}
            href="https://jonathanlangner.me/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            title="My Blog"
            className={activePgBlog ? "nav-link active-page" : "nav-link"}
            href="https://jonathanlangner.me/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
