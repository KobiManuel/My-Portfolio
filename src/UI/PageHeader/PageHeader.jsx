import React, { useEffect, useState } from 'react'
import './_PageHeader.scss'
import arrow from './images/angle-double-left.png'
import { useLocation, useNavigate } from 'react-router';
import developer from '../../Components/DeveloperSection/images/A.I.jpg'
const PageHeader = ({title1, title2, stack}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const buttonStyle = {
      backgroundColor: isHovered && "",
    };


 useEffect(() => {
   const btn = document.getElementById("devtoolsBtn");
   const handleAnimationEnd = () => {
     btn.style.visibility = "hidden";
   };
   btn.addEventListener("animationend", handleAnimationEnd);
   const returnPage = document.querySelector(".backward-arrow");
   if (pathName === "/developerPage") {
     btn.style.animation = "materializeAnimation 1s forwards";
     setTimeout(() => {
       returnPage.style.transform = "translateX(0)";
       returnPage.style.opacity = "1";
     }, 400);
   }

   return () => {
     btn.style.animation = "";
     btn.removeEventListener("animationend", handleAnimationEnd);
   };
 }, []);

     const handlePageLoad = () => {
       const enlarge = document.getElementById("secondDiv");
       const page = document.querySelector(".developer-page");
       setTimeout(() => {
         enlarge.style.height = "100%";
       }, 10);
       setTimeout(() => {
         page.style.position = "absolute";
         page.style.right = "0";
         page.style.width = "90vw";
       }, 800);
     };
  return (
    <div className="developer-page_container">
      <button className="backward-arrow" onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow-icon" />
      </button>
      <div className="developer-page">
        <div id="card1" className="project-card visible">
          <span>
            <h3>{title1}</h3>
            <h3>{title2}</h3>
          </span>
          <span></span>

          <p>{stack}</p>

          <a
            id="devtoolsBtn"
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
    </div>
  );
}

export default PageHeader