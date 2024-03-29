/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import "./faqSection.css";

const FaqSection = () => {
  const [accordion1, setAccordion1] = useState(true);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);
  const [accordion6, setAccordion6] = useState(false);
  const [accordion7, setAccordion7] = useState(false);
  const [accordion8, setAccordion8] = useState(false);
  const [accordion9, setAccordion9] = useState(false);
  const [accordion10, setAccordion10] = useState(false);
  const [accordion11, setAccordion11] = useState(false);

  const handleAccordion1 = () => {
    setAccordion1((prev) => !prev);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion2 = () => {
    setAccordion1(false);
    setAccordion2((prev) => !prev);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion3 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3((prev) => !prev);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion4 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4((prev) => !prev);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion5 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5((prev) => !prev);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion6 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6((prev) => !prev);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion7 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7((prev) => !prev);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion8 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8((prev) => !prev);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion9 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9((prev) => !prev);
    setAccordion10(false);
    setAccordion11(false);
  };

  const handleAccordion10 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10((prev) => !prev);
    setAccordion11(false);
  };

  const handleAccordion11 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
    setAccordion8(false);
    setAccordion9(false);
    setAccordion10(false);
    setAccordion11((prev) => !prev);
  };

  return (
    <div name="aboutus" className="faq-Section-main-wrapper">
      <div className="faqsection-inner-wrapper">
        <h1 className="faq-title">FAQ's</h1>
        <div className="question-wrapper" onClick={() => handleAccordion1()}>
          <img src={accordion1 ? minus : plus} alt="minus" />
          <h2>What is a GoosePunk?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion1 ? { display: "none" } : null}
        >
          Owner ship of a GoosePunk is your exclusive invitation into the
          Gaggle, a place where other Geese meetup, hangout, listen to music,
          exchange art and talk about strategies moving forward inside the
          GoosePunks project.
        </p>
        <div className="question-wrapper" onClick={() => handleAccordion2()}>
          <img src={accordion2 ? minus : plus} alt="minus" />
          <h2>How were the GoosePunks generated?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion2 ? { display: "none" } : null}
        >
          Each GoosePunk was generated from a collection of more than 1,100+
          colored hand drawn attributes.
        </p>
        <div className="question-wrapper" onClick={() => handleAccordion3()}>
          <img src={accordion3 ? minus : plus} alt="minus" />
          <h2>What determines the GoosePunk I receive?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion3 ? { display: "none" } : null}
        >
          Each GoosePunk is hatched with different traits everytime you send a
          transaction to “mint”.
        </p>
        <div className="question-wrapper" onClick={() => handleAccordion4()}>
          <img src={accordion4 ? minus : plus} alt="minus" />
          <h2>What do I need to mint a GoosePunk?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion4 ? { display: "none" } : null}
        >
          You will need a bit of ETH and a MetaMask wallet, you can buy ETH
          either on Coinbase or another exchange then deposit that into your
          MetaMask wallet. Make sure your wallet is connected!
        </p>
        <div className="question-wrapper" onClick={() => handleAccordion5()}>
          <img src={accordion5 ? minus : plus} alt="minus" />
          <h2>How do I use Metamask?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion5 ? { display: "none" } : null}
        >
          Please{" "}
          <a href="https://metamask.io/faqs" target="_blank">
            {" "}
            click this link
          </a>{" "}
          and follow it straight from the source
        </p>

        <div className="question-wrapper" onClick={() => handleAccordion6()}>
          <img src={accordion6 ? minus : plus} alt="minus" />
          <h2>What does my GoosePunk do?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion6 ? { display: "none" } : null}
        >
          With ownership of a GoosePunk NFT you will have the ability to stake
          and render the NFT inside the GoosePunks game. Collect in game
          currency, travel to cities, participate in the GoosePunk ecosystem,
          build a house, buy city’s, land deeds and more. Users will be able to
          interact with other players, have a dance party, duel, and form
          factions.
        </p>
        {/* <div className="question-wrapper" onClick={() => handleAccordion7()}>
          <img src={accordion7 ? minus : plus} alt="minus" />
          <h2>
            When can I purchase NFT merchandise or customize some clothes?
          </h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion7 ? { display: "none" } : null}
        >
          Stay up to date on our roadmap, we’ll keep you posted
        </p> */}
        {/* <div className="question-wrapper" onClick={() => handleAccordion8()}>
          <img src={accordion8 ? minus : plus} alt="minus" />
          <h2>WTF is an NFT?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion8 ? { display: "none" } : null}
        >
          (NON-FUNGIBLE-TOKEN) A unique one of a kind item that YOU have
          complete ownership of
        </p> */}
        <div className="question-wrapper" onClick={() => handleAccordion9()}>
          <img src={accordion9 ? minus : plus} alt="minus" />
          <h2>When can I see my GoosePunk?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion9 ? { display: "none" } : null}
        >
          Right after you click mint
        </p>
        <div className="question-wrapper" onClick={() => handleAccordion10()}>
          <img src={accordion10 ? minus : plus} alt="minus" />
          <h2>Where can I sell my NFT?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion10 ? { display: "none" } : null}
        >
          All GoosePunk NFTs will be available on opensea.io for purchase or
          sales, you can also transfer to secondary markets that support ETH
        </p>
        {/* <div className="question-wrapper" onClick={() => handleAccordion11()}>
          <img src={accordion11 ? minus : plus} alt="minus" />
          <h2>Can I use my NFT in the GoosePunk game?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion11 ? { display: "none" } : null}
        >
          Yes! All GoosePunks will be generated and integrated into the
          GoosePunks game
        </p> */}
      </div>
    </div>
  );
};

export default FaqSection;
