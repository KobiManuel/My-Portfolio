
import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeveloperPage from "./Pages/DeveloperPage/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}  />
            <Route path="/developerPage" element={<DeveloperPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
