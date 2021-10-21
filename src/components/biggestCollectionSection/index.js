import React from "react";
import collectionimg1 from "../../assets/collectionimg1.png";
import collectionimg2 from "../../assets/collectionimg2.png";
import collectionimg3 from "../../assets/collectionimg3.png";
import collectionimg4 from "../../assets/collectionimg4.png";
import collectionimg5 from "../../assets/collectionimg5.png";
import collectionimg6 from "../../assets/collectionimg6.png";
import "./biggestCollectionSection.css";

const BiggestCollectionSection = () => {
  return (
    <div name="outcollection" className="biggest-collection-main-wrapper">
      <div className="biggest-collection-inner-container">
        <div className="biggest-collection-header">
          <h1>OUR COLLECTION</h1>
          <button>SHOW ALL</button>
        </div>
        <div className="biggest-collection-img-wrapper">
          <div className="img-row">
            <div className="img-wrapper">
              <img src={collectionimg1} alt="collectionimg1" />
            </div>
            <div className="img-wrapper">
              <img src={collectionimg2} alt="collectionimg2" />
            </div>
            <div className="img-wrapper">
              <img src={collectionimg3} alt="collectionimg3" />
            </div>
          </div>
          <div className="img-row">
            <div className="img-wrapper">
              <img src={collectionimg4} alt="collectionimg4" />
            </div>
            <div className="img-wrapper">
              <img src={collectionimg5} alt="collectionimg5" />
            </div>
            <div className="img-wrapper">
              <img src={collectionimg6} alt="collectionimg6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiggestCollectionSection;
