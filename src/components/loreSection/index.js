import React from "react";
import { useHistory } from "react-router-dom";
import lorerightimg from "../../assets/26.png";
import {  
  animateScroll as scroll,  
} from "react-scroll";
import "./loreSection.css";

const LoreSection = () => {
  let history = useHistory();
  const gotoLoreReadMore = () => {
    history.push("/lore");
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="loreSection-main-wrapper">
        <div className="loreSection-inner-wrapper">
          <div className="loresection-box-left">
            <h1>GoosePunks Lore</h1>
            <p>
              2034. The humans of the planet once called Earth, reach for
              extraordinary technological heights. During a great time of
              suspicion and accusation, the world’s governments couldn’t
              maintain peace. Four mega-nations arm themselves for war. In these
              days, legends clash and lives are lost. Ground forces are
              deployed, and they prepare fortifications. What made this war
              different from the ones before or since? One technician disobeyed
              orders - not wanting fame, power, or riches, but rather for all of
              humanity to be obliterated...
            </p>
            <br />
            <button
              style={{ cursor: "pointer", padding: "5px 10px" }}
              onClick={() => gotoLoreReadMore()}
            >
              Read More
            </button>
          </div>
          <div className="loresection-box-right">
            <div className="lore-box-right-img-wrapper">
              <img src={lorerightimg} alt="lorerightimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoreSection;
