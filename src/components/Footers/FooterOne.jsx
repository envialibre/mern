import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../../lib/assets";

export const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="container">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="left-sider">
                  <div className="f-logo">
                    <Link to="/">
                      <img src={LOGO} alt="" />
                    </Link>
                  </div>
                  <div className="copyright-text">
                    <p>Copyright © Program Plus | All Right Reserved</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-social">
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
    </footer>
  );
};
