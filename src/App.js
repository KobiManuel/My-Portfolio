import { useContext, useRef } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioContext } from "./Context/context";
import Hero from "./Components/Hero/Main";

function App() {
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
    <div ref={containerRef} className="App">
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
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}  />
            <Route path="/developerPage" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
