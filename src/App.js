import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ReportPage from "./routes/ReportPage"; // 새로 추가할 페이지 컴포넌트
import InfoPage from "./routes/InfoPage";
import TimelinePage from "./routes/TimelinePage";
import AboutPage from "./routes/AboutPage";
import GamePage from "./routes/GamePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
