import React from "react";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () =>
{
  return (
    <div className="footer-container">
      <p>Contact: <a href="tel:0768346741">0768346741</a></p>
      <a className="email" href="mailto:mihaiasiazs@yahoo.com">
        mihaiasiazs@yahoo.com
          </a>
      <p className="icons">
        <a href="https://www.facebook.com/Floriplesesti">
          <AiFillFacebook /></a>
      </p>
    </div>
  );
};

export default Footer;
