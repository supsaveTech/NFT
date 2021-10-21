import React, { useState, useLayoutEffect } from "react";
import headerLogo from "../../assets/newlogo.jpeg";
import { Link } from "react-scroll";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = ({ account }) => {
  let history = useHistory();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuTogle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();

  const gotoOutCollection = () => {
    history.push("/");
  };

  const gotoRoadmap = () => {
    history.push("/");
  };

  const gotoAboutUser = () => {
    history.push("/");
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="header-inner-container">
          <div className="inner-header-block">
            <img src={headerLogo} alt="header logo" />
          </div>
          <div className="inner-header-block-right">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => gotoRoadmap()}
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => gotoAboutUser()}
                >
                  About us
                </Link>
              </li>
              <li>
                <a href="http://newbgeneration.com">NGT</a>
              </li>
            </ul>
            <button className="connect-button">
              {account
                ? account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)
                : "Disconnected"}
            </button>
            <button
              className="humbarger-btn"
              onClick={() => handleMobileMenuTogle()}
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="mobile-links"
        style={mobileMenuOpen ? { display: "block" } : { display: "none" }}
      >
        <div className="links-wrapper1">
          <div className="close-wrapper">
            <span
              style={{ color: "white", fontSize: "24px" }}
              onClick={() => handleMobileMenuTogle()}
            >
              X
            </span>
          </div>
          <ul>
            <li onClick={() => gotoOutCollection()}>
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
            </li>
            <li onClick={() => gotoOutCollection()}>
              <Link
                activeClass="active"
                to="aboutus"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
