/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import bannerImg from "../../assets/banerinpng.png";
import greenCheck from "../../assets/green-check.svg";
import Slider from "@material-ui/core/Slider";
import "./topSection.css";

const TopSection = ({ mint, totalSupply, price }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="topsection-main-wrapper">
        <div className="topsection-inner-box-wrapper">
          <div className="topsection-inner-box">
            <h1>GoosePunks NFTs</h1>
            <p className="underheading-text">            
              A collection of {totalSupply}/12000 GoosePunks living in dystopia
              on th ETH blockchain.
            </p>
            <div className="bigger-button-wrapper">
              <div className="bigger-button">
                <img src={greenCheck} alt="greenCheck" />
                <p className="big-btn-text">
                  Tier 1-3, 4,500 Renegade GoosePunks minted
                </p>
              </div>
              <div className="virticle-dots" />
              <div className="bigger-button1">
                <img
                  style={{ display: "none" }}
                  src={greenCheck}
                  alt="greenCheck"
                />
                <p
                  // style={{ color: "grey", paddingLeft: "38px" }}
                  className="big-btn-text1"
                >
                  Tier 2-3,500 Renegade GoosePunks minted
                </p>
              </div>
              <div className="virticle-dots" />
              <div className="bigger-button1">
                <img
                  style={{ display: "none" }}
                  src={greenCheck}
                  alt="greenCheck"
                />
                <p
                  // style={{ color: "grey", paddingLeft: "38px" }}
                  className="big-btn-text1"
                >
                  Tier 3-3, 3,000 Renegade GoosePunks minted
                </p>
              </div>
            </div>
            <div className="topsection-slider-wrapper">
              <p className="totalstarfish">Total GoosePunks Minted</p>
              <Slider
                value={value}
                min={0}
                step={1}
                max={20}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                className="slider-last"
              />
              <p className="mint2startfish">
                Mint {value} GoosePunks ({(value * price).toFixed(2)} Ether)
              </p>
            </div>
            <div className="mint-now-button-wrapper">
              <button
                onClick={() => mint(value)}
                // disabled={false}
                style={{
                  cursor: "pointer"
                  // backgroundColor: "grey",
                  // color: "#fff",
                  // outline: "none",
                }}
              >
                Mint Now
              </button>
            </div>
          </div>
          <div className="topsection-inner-box">
            <img className="banner-img" src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
