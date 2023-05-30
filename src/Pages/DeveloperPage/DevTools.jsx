import React, { useContext, useEffect, useRef, useState } from "react";
import developer from "../../Components/DeveloperSection/images/A.I.jpg";
import "./_Main.scss";
import { useLocation, useNavigate } from "react-router";
import arrow from "./images/angle-double-left.png";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import { PortfolioContext } from "../../Context/context";

const DeveloperPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
   const {
     heroCard,
     firstCard,
     secondCard,
     thirdCard,
     setFirstCard,
     setSecondCard,
     setThirdCard,
     setHeroCard,
   } = useContext(PortfolioContext);
   const cardValues = [
     heroCard,
     firstCard,
     secondCard,
     thirdCard,
   ];
   const cardSetters = [
     setHeroCard,
     setFirstCard,
     setSecondCard,
     setThirdCard,
   ];

   const handleCardClick = (index) => {
     cardSetters.forEach((setter, i) => {
       setter(i === index);
     });
     const pagesContainer =
       devToolsRef.current.querySelector(".devtool-pages");
     const component = pagesContainer.children[index];
     if (component) {
       component.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   };
   const devToolsRef = useRef(null);

  const buttonStyle = {
    backgroundColor: isHovered && "",
  };

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

  return (
    <section className="dev-tools"ref={devToolsRef} >
      <div className="fixed">
        {cardValues.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: card ? "48px" : "24px",
            }}
          ></button>
        ))}

        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            transform: thirdCard && "rotate(90deg) translateX(200%)",
            opacity: thirdCard && "0",
            transition: "all 0.7s ease",
          }}
        >
          <p>Scroll </p>
          <p></p>
          <p> down</p>

          <p>→</p>
        </div>
      </div>
      <div className="developer-page_container">
        <button className="backward-arrow" onClick={() => navigate(-1)}>
          <img src={arrow} alt="arrow-icon" />
        </button>
        <div className="developer-page">
          <div id="card1" className="project-card visible">
            <span>
              <h3>A.I & Developer</h3>
              <h3>Tools</h3>
            </span>
            <span></span>

            <p>Web</p>

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
      <div className="devtool-pages">
        <ProjectCard
          title1="Design & Art"
          title2="Portfolio"
          description="Visual Design"
          Image={developer}
          hoverColor="#012c5a"
        />
        <ProjectCard
          title1="Design & Art"
          title2="Portfolio"
          description="Visual Design"
          Image={developer}
          hoverColor="#012c5a"
        />
        <ProjectCard
          title1="Design & Art"
          title2="Portfolio"
          description="Visual Design"
          Image={developer}
          hoverColor="#012c5a"
        />
      </div>
    </section>
  );
};

export default DeveloperPage;
