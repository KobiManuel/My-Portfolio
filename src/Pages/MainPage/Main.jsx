import React, { useContext, useRef } from 'react'
import Hero from '../../Components/Hero/Main'
import DeveloperSection from '../../Components/DeveloperSection/Main'
import FrontendSection from '../../Components/FrontendSection/Main'
import DesignPage from "../../Components/DesignPage/Main";
import './_Main.scss';
import AboutMe from '../../Components/AboutMe/Main'
import ContactMe from '../../Components/ContactMe/Main'
import { PortfolioContext } from '../../Context/context';

const MainPage = () => {
    const {
      heroCard,
      firstCard,
      secondCard,
      thirdCard,
      fourthCard,
      fifthCard,
      setFirstCard,
      setSecondCard,
      setThirdCard,
      setFourthCard,
      setHeroCard,
      setFifthCard,
    } = useContext(PortfolioContext);
    const cardValues = [
      heroCard,
      firstCard,
      secondCard,
      thirdCard,
      fourthCard,
      fifthCard,
    ];
    const cardSetters = [
      setHeroCard,
      setFirstCard,
      setSecondCard,
      setThirdCard,
      setFourthCard,
      setFifthCard,
    ];

    const handleCardClick = (index) => {
      cardSetters.forEach((setter, i) => {
        setter(i === index);
      });
      const pagesContainer = containerRef.current.querySelector(".pages");
      const component = pagesContainer.children[index];
      if (component) {
        component.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    const containerRef = useRef(null);
  return (
    <div className="main_page" ref={containerRef}>
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
            transform: fifthCard && "rotate(90deg) translateX(200%)",
            transition: "transform 0.7s ease",
          }}
        >
          <p>Scroll </p>
          <p></p>
          <p> down</p>

          <p>→</p>
        </div>
      </div>
      <div className="pages">
        <Hero />
        <DeveloperSection />
        <FrontendSection />
        <DesignPage />
        <AboutMe />
        <ContactMe />
      </div>
    </div>
  );
}

export default MainPage