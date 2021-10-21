import React from "react";
import roadmapPoint from "../../assets/roadmap-point.svg";
import "./roadmapSection.css";

const RoadMapSection = () => {
  return (
    <div name="roadmap" className="roadmap-main-wrapper">
      <div className="roadmap-inner-wrapper">
        <div className="roadmap-inner">
          <h1>ROADMAP</h1>
          <div className="roadmap1">
            <img
              className="roadmap-point1"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text1">Website development</span>
            <img
              className="roadmap-point2"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text2">
              Community growth
              <br />
              on social channels
            </span>
            <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text3">
              Airdrop and giveaway
              <br />
              campaign
            </span>
            <img
              className="roadmap-point4"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text4">
              3,500 Tier 1 Renegade
              <br />
              GoosePunk NFTs minted
            </span>
            <img
              className="roadmap-point5"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text5">
              3,500 Tier 2 Renegade
              <br />
              GoosePunk NFTs minted
            </span>
            <img
              className="roadmap-point6"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text6">
              3,000 Tier 3 Renegade
              <br />
              GoosePunk NFTs minted
            </span>
            <img
              className="roadmap-point7"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text7">
              2,000 Random Tier 1-3
              <br />
              GoosePunk NFTs minted
            </span>
            <img
              className="roadmap-point8"
              src={roadmapPoint}
              alt="roadmapPoint"
            />
            <span className="roadmap-text8">
              Staking development
              <br />
              initiation
            </span>
          </div>
        </div>
        <div className="roadmap2">
          <img
            className="roadmap-pointt1"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-textt1">
            Community art collab
            <br />
            contests
          </span>
          <img
            className="roadmap-pointt2"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-textt2">
            Development of Drifter
            <br />
            GoosePunk NFTs
          </span>
          <img
            className="roadmap-pointt3"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-textt3">Staking Implementation</span>
          <img
            className="roadmap-pointt4"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-textt4">
            Release of Drifter
            <br />
            GoosePunk NFTs
          </span>
          <img
            className="roadmap-pointt5"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-textt5">
            GoosePunks game
            <br />
            development starts
          </span>
        </div>
        <div className="roadmap3">
          <img
            className="roadmap-pointtt1"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-texttt1">
            Development of “The Swans”
            <br />
            GoosePunk NFTs
          </span>
          <img
            className="roadmap-pointtt2"
            src={roadmapPoint}
            alt="roadmapPoint"
          />
          <span className="roadmap-texttt2">To be continued…</span>          
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default RoadMapSection;
