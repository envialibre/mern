import React from "react";
import { ScrollToTopButton } from "../components/ScrollToTopButton/ScrollToTopButton";
import { FooterOne } from "../components/Footers/FooterOne";
import { HeaderOne } from "../components/Headers/HeaderOne";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const Layout = ({ children, breadcrumb, title }) => {
  return (
    <>
      {/* Scroll-top  */}
      <ScrollToTopButton />

      {/* header */}
      <HeaderOne />
      {/* breadcrumb */}
      {breadcrumb && <Breadcrumb text={breadcrumb} title={title} />}

      {/* children */}
      <main className="fix">{children}</main>

      {/* footer */}
      <FooterOne />
    </>
  );
};
