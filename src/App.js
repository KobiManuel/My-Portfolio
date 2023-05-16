import { useEffect, useRef } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage/Main";
// import Hero from "./Pages/Hero/Main";
// import ProjectCard from "./UI/ProjectCard/ProjectCard";
// import developer from "./assets/developer.png";

function App() {
  const containerRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const pageComponents = [<Hero />, <ProjectCard
  //   title1= "A.I &"
  //   title2= "Developer Tools"
  //   description= "Fullstack development"
  //   Image={developer}
  // />, <Hero />, <Hero />];

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const offsetX = (clientX / window.innerWidth) * 5;
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

  // const handleScroll = () => {
  //   const container = containerRef.current;
  //   const scrollTop = container.scrollTop;
  //   const componentHeight = container.clientHeight;

  //   const index = Math.floor(scrollTop / componentHeight);
  //   setActiveIndex(index);
  // };

//  const handleClick = (index) => {
//   console.log(index);
//   const targetComponent = containerRef.current.querySelectorAll('.page')[index];
//   targetComponent.scrollIntoView({ behavior: "smooth", block: "start" });
//   setActiveIndex(index);
//   console.log(activeIndex)
// };


  return (
    <div ref={containerRef} className="App">
      <MainPage />
      {/* <div className="fixed">
        {pageComponents.map((component, index) => (
          <span
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: activeIndex === index ? "48px" : "24px"
            }}
          ></span>
        ))}
        <div style={{ width: "fit-content", height: "fit-content" }}>
          <p>Scroll </p>
          <p></p>
          <p> down</p>
          <p>→</p>
        </div>
      </div>
      <div className="page-container">
        {pageComponents.map((component, index) => (
          <div key={index} className="page">
            {component}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
