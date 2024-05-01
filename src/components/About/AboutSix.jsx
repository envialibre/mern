import React from "react";
import { Link } from "react-router-dom";
import {
  H5_ABOUT_IMG,
  H5_ABOUT_SHAPE01,
  H5_ABOUT_SHAPE02,
} from "../../lib/assets";

export const AboutSix = () => {
  return (
    <section className="about-area-six">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="about-img-six">
              <img src={H5_ABOUT_IMG} alt="" />
              <img src={H5_ABOUT_SHAPE01} alt="" />
              <img src={H5_ABOUT_SHAPE02} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-six">
              <div className="section-title section-title-three mb-30 tg-heading-subheading animation-style1">
                <span className="sub-title tg-element-title">
                  Digital Agency
                </span>
                <h2 className="title tg-element-title">
                  We’re The Best Digital Agency
                </h2>
              </div>

              <p>
                We are dedicated to the development of web and mobile
                applications and systems. We are a team of professionals who
                have been working in the field of information technology for
                more than 10 years. We have extensive experience in the
                development of web and mobile applications, as well as in the
                development of information systems.
              </p>

              <div className="about-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-arrow-right"></i>100% Better results
                  </li>
                  <li>
                    <i className="fas fa-arrow-right"></i>Quality Assurance
                  </li>
                  <li>
                    <i className="fas fa-arrow-right"></i>Customer satisfaction
                  </li>
                  <li>
                    <i className="fas fa-arrow-right"></i>24/7 Support
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="btn btn-three">
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
