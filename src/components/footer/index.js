/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import facebook from "../../assets/facebook.svg";
// import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
// import youtube from "../../assets/youtube.svg";
import dribbble from "../../assets/dribbble.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-main-wrapper">
      <div className="footer-inner-wrapper">
        <div className="copyright-wrapper">
          <div className="copyright-left">
            <p>
              Copyright &copy; {new Date().getFullYear()}. All rights reserved
              by GoosePunks
            </p>
          </div>
          <div className="copyright-right">
            <div className="copyright-icons-wrapper">
              {/* <div className="icon-wrapper">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon-wrapper">
                <img src={instagram} alt="instagram" />
              </div> */}
              <div className="icon-wrapper">
                <a
                  href="https://twitter.com/goosepunks?s=21"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
              {/* <div className="icon-wrapper">
                <img src={youtube} alt="youtube" />
              </div> */}
              <div className="icon-wrapper">
                <a href="https://discord.gg/XugTyRrQgW" target="_blank">
                  <img src={dribbble} alt="dribbble" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="terms-and-condition-wrapper">
          <span>Terms of Service</span>
          <span className="right">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
