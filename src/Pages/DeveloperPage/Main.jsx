import React, { useState } from "react";
import developer from "../../Components/DeveloperSection/images/A.I.jpg";
import './_Main.scss'

const DeveloperPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered && "",
  };

  const handlePageLoad = () => {
    const enlarge = document.getElementById("secondDiv");
    const page = document.querySelector(".developer-page");
    const card =document.getElementById("card1");
    setTimeout(() => {
         enlarge.style.height = "100%";
    }, 10);
     setTimeout(() => {
       page.style.position = "absolute";
       page.style.right = "0";
        page.style.width = "90vw";
    //    enlarge.style.width = "70%";
     }, 800);
  }

  return (
    <section style={{position: "relative"}}>
      <div className="developer-page">
        <div id="card1" className="project-card visible">
          <span>
            <h3>A.I & Developer</h3>
            <h3>Tools</h3>
          </span>
          <span></span>

          <p>Web</p>
          <a
            href="/"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Visit site
          </a>
        </div>
        <div
          id="secondDiv"
          className="project-card visible"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onLoad={handlePageLoad}
        >
          <img
            src={developer}
            className="image visible"
            alt="project background"
          />
          {hovered && (
            <>
              <div className="ripple-1"></div>
              <div className="ripple-2"></div>
              <div className="ripple-3"></div>
              <div className="ripple-4"></div>
              <div className="ripple-5"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeveloperPage;
