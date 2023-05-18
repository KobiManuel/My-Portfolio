import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [thirdCard, setThirdCard] = useState(false);
  const [fourthCard, setFourthCard] = useState(false);
  const [fifthCard, setFifthCard] = useState(false);
  return (
    <PortfolioContext.Provider
      value={{
        firstCard,
        setFirstCard,
        secondCard,
        setSecondCard,
        thirdCard,
        setThirdCard,
        fourthCard,
        setFourthCard,
        fifthCard,
        setFifthCard,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
