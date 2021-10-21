import React from "react";
import "./style.css";
const Index = () => {
  return (
    <section className="main-wrapper">
      <div className="inner_wrapper">
        <div className="inner_content">
          <h2>Contact us</h2>

          <p>
            {" "}
            Do you have a project and want to help build the Khena Metaverse?
            Get in touch with us today! Email{" "}
            <a href="mailto:zane@goosepunks.com ">
              {/* <i class="fab fa-discord"></i> */}
              zane@goosepunks.com
            </a>
            to set up a call!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
