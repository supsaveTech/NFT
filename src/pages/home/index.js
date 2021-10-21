import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BelowTopSection from "../../components/belowTopSection";
// import BiggestCollectionSection from "../../components/biggestCollectionSection";
import FaqSection from "../../components/faqSection";
import Footer from "../../components/footer";
import Header from "../../components/header";
import LoreSection from "../../components/loreSection";
import RoadMapSection from "../../components/roadmapScetion";
import TopSection from "../../components/topSection";
import "./home.css";
import KhenaSection from "../../components/khenaSection";
import ContactSection from "../../components/contactSection";

toast.configure();

const Home = ({ account, mint, totalSupply, displayPrice }) => {
  return (
    <div>
      <Header account={account} />
      <div>
        <div
          className="connect-button-wrapper1"
          style={{ paddingTop: "20px", textAlign: "center" }}
        >
          <button
            className="connect-wallet-btn1"
            // onClick={() => connectHandle()}
          >
            {account
              ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
              : "Disconnected"}
          </button>
        </div>
        <TopSection
          mint={mint}
          totalSupply={totalSupply}
          price={displayPrice}
        />
        <BelowTopSection />
        <KhenaSection />
        <RoadMapSection />
        {/* <BiggestCollectionSection /> */}
        <LoreSection />
        <ContactSection />
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
