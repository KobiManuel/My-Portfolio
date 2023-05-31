
import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeveloperPage from "./Pages/DeveloperPage/DevTools";
import FrontendPage from "./Pages/FrontendPage/FrontendPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects/developer" element={<DeveloperPage />} />
          <Route path="/projects/frontend" element={<FrontendPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
