import { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./Pages/Hero/Main";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const offsetX = (clientX / window.innerWidth) * 20;
      const offsetY = (clientY / window.innerHeight) * 20;

      container.style.setProperty(
        "background-position",
        `calc(100% - ${offsetX}px) calc(50% + ${offsetY}px)`
      );
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="App">
      <Hero />
      <Hero />
    </div>
  );
}

export default App;
