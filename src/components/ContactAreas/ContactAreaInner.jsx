import React from "react";
import { CONTACT_IMG } from "../../lib/assets";
import { ContactForm } from "./ContactForm";

export const ContactAreaInner = () => {
  return (
    <section className="inner-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="inner-contact-img">
              <img src={CONTACT_IMG} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="inner-contact-info">
              <h2 className="title">Write Us</h2>
              <ContactForm />
              <h2 className="title">Our Office Address</h2>
              <div className="contact-info-item">
                <h5 className="title-two">Col Office</h5>
                <ul className="list-wrap">
                  <li>
                    Call. 151c # 107 -10 int 3 Of 801 <br />
                    Bogota - Colombia
                  </li>
                  <li>+57 313 337 3348</li>
                  <li>admin@programplus.co</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
