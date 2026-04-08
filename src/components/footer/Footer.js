import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className={isDark ? "footer-div dark-mode" : "footer-div"}>
        <div className="footer-container">
          <div className="footer-content">
            <p className="footer-text">
              © {currentYear} Umar Azam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
