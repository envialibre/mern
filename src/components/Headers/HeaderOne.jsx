import React from "react";
import { MobileMenu } from "./MobileMenu";
import { NavMenus } from "./NavMenus";
import { LOGO } from "../../lib/assets";
import { useStickyMenu } from "../../lib/hooks/useStickyMenu";
import { Link } from "react-router-dom";

export const HeaderOne = () => {
  // menu sticky
  useStickyMenu();

  return (
    <header className="transparent-header">
      <div className="heder-top-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="header-top-left">
                <ul className="list-wrap">
                  <li>
                    <i className="flaticon-location"></i>Bogota - Colombia
                  </li>
                  <li>
                    <i className="flaticon-mail"></i>
                    <a href="mailto:admin@programplus.co">admin@programplus.co</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="header-top-right">
                <div className="header-contact">
                  <a href="tel:+573133373348" target="_blank">
                    <i className="flaticon-phone-call"></i>+57 313 3373348
                  </a>
                </div>
                <div className="header-social">
                  <ul className="list-wrap">
                    <li>
                      <a target="_blank" href="https://www.facebook.com/programplus">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/programplusco">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/programplus">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sticky-header" className="menu-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link to="/">
                      <img src={LOGO} alt="Logo" />
                    </Link>
                  </div>

                  {/* nav links */}
                  <NavMenus />

                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <Link to="/contact" className="btn btn-two">
                          Get a Quote
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Mobile Menu  */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
